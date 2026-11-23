// Pulls the self-paced course lessons from the InnovateUS Moodle. See moodle.mjs for the sign-in.
//
// What a course is made of there, and what is taken of each:
//   outline        sections, activities, order, completion rules      -> data/moodle/contents/<course>.json
//   scorm          a lecture lesson: an Articulate Rise package        -> its lesson blocks (text, accordions,
//                  holding the lesson's text blocks, video, captions      links) as data/moodle/scorm/<id>.json;
//                                                                         video, captions, images in files/
//   h5pactivity    an interactive video or exercise: an H5P package    -> its content.json (questions, answers,
//                                                                         timings, video address) as
//                                                                         data/moodle/h5p/<id>.json; media in files/
//   page           a text page                                         -> data/moodle/pages.json; attachments in files/
//   videotime      a Vimeo video with a completion rule                -> data/moodle/videotime.json (the address)
//   quiz           see pull-moodle-quizzes.mjs
//   url, label     links and headings                                  -> data/moodle/urls.json, labels.json
//
// Left behind: the players that run the packages (Rise's and H5P's own code), certificates,
// the "About you" questionnaires, and packages attached to a page that the page does not show.
//
// The account is self-enrolled in any course that allows it, so a new course is picked up
// on the next run.
//
// Writes also: data/moodle/courses.json, data/moodle/files.json (every file kept or skipped, and why)

import { execFile } from 'node:child_process'
import { mkdir, readFile, readdir } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { promisify } from 'node:util'
import { DATA, FILES, download, megabytes, pool, remove, safeName, saveJson, sizeOf } from './lib.mjs'
import { call, withToken } from './moodle.mjs'

const run = promisify(execFile)
const OUT = join(DATA, 'moodle')
const MEDIA = join(FILES, 'moodle')
const PAGE_ATTACHMENT_LIMIT = 20 * 1048576

async function unzip(zip, into, { only = [], except = [] }) {
  const args = ['-q', '-o', zip, ...only, ...(except.length ? ['-x', ...except] : []), '-d', into]
  await mkdir(into, { recursive: true }) // unzip makes only the last folder of the path
  try {
    await run('unzip', args, { maxBuffer: 1 << 24 })
  } catch (error) {
    if (error.code !== 1) throw error // 1 is "finished with warnings"
  }
}

async function listFiles(dir, base = dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await listFiles(path, base)))
    else if (!entry.name.startsWith('.')) out.push({ name: relative(base, path), size: await sizeOf(path) })
  }
  return out
}

async function marker(dir) {
  try {
    return JSON.parse(await readFile(join(dir, '.pulled.json'), 'utf8'))
  } catch {
    return null
  }
}

// --- who we are, and which courses ------------------------------------------------------------

const site = await call('core_webservice_get_site_info')
const all = (await call('core_course_get_courses_by_field')).courses
let mine = new Set((await call('core_enrol_get_users_courses', { userid: site.userid })).map((c) => c.id))
for (const course of all) {
  if (!mine.has(course.id) && course.enrollmentmethods?.includes('self')) {
    const result = await call('enrol_self_enrol_user', { courseid: course.id }).catch(() => null)
    if (result?.status) mine.add(course.id)
  }
}
const courses = all.filter((c) => mine.has(c.id)).sort((a, b) => a.id - b.id)
const courseids = courses.map((c) => c.id)
await saveJson(join(OUT, 'courses.json'), courses)

// --- outlines and the per-kind records ---------------------------------------------------------

const videotimeModules = []
for (const course of courses) {
  const sections = await call('core_course_get_contents', { courseid: course.id })
  for (const section of sections) {
    for (const module of section.modules ?? []) {
      // The learner's own progress is not content.
      delete module.completiondata
      delete module.dates
      if (module.modname === 'videotime') videotimeModules.push({ course: course.id, cmid: module.id })
    }
  }
  await saveJson(join(OUT, 'contents', `${course.id}.json`), sections)
}

const scorms = (await call('mod_scorm_get_scorms_by_courses', { courseids })).scorms
const h5ps = (await call('mod_h5pactivity_get_h5pactivities_by_courses', { courseids })).h5pactivities
const pages = (await call('mod_page_get_pages_by_courses', { courseids })).pages
await saveJson(join(OUT, 'scorms.json'), scorms)
await saveJson(join(OUT, 'h5pactivities.json'), h5ps)
await saveJson(join(OUT, 'pages.json'), pages)
await saveJson(join(OUT, 'urls.json'), (await call('mod_url_get_urls_by_courses', { courseids })).urls)
await saveJson(join(OUT, 'labels.json'), (await call('mod_label_get_labels_by_courses', { courseids })).labels)

const videotimes = await pool(videotimeModules, 3, async ({ course, cmid }) => ({
  course,
  cmid,
  ...(await call('mod_videotime_get_videotime', { cmid })),
}))
await saveJson(
  join(OUT, 'videotime.json'),
  videotimes.map((r, i) => (r.ok ? r.value : { ...videotimeModules[i], error: r.error })),
)

// --- files ---------------------------------------------------------------------------------------

const manifest = []

// Course cover images.
for (const course of courses) {
  for (const file of course.overviewfiles ?? []) {
    const path = join('courses', String(course.id), safeName(file.filename))
    await download(withToken(file.fileurl), join(MEDIA, path), file.filesize)
    manifest.push({ kind: 'course-image', course: course.id, path: `moodle/${path}`, size: file.filesize })
  }
}

// Lecture lessons. A Rise package keeps its lesson as base64 JSON under scormcontent/
// and its media in scormcontent/assets/; everything else in the zip is the player.
const scormResults = await pool(scorms, 5, async (scorm) => {
  const dir = join(MEDIA, 'scorm', String(scorm.id))
  const record = { kind: 'scorm', course: scorm.course, id: scorm.id, name: scorm.name, packageSize: scorm.packagesize }
  if (!scorm.packageurl) return { ...record, skipped: 'Moodle gives no package address' }
  const done = await marker(dir)
  if (done?.sha1hash !== scorm.sha1hash) {
    const zip = join(MEDIA, '_packages', `scorm-${scorm.id}.zip`)
    await download(withToken(scorm.packageurl), zip, scorm.packagesize)
    await remove(dir)
    await unzip(zip, dir, { except: ['scormcontent/lib/*', 'scormdriver/*', '*.xsd'] })
    await saveJson(join(dir, '.pulled.json'), { sha1hash: scorm.sha1hash })
    await remove(zip)
  }
  // Rise exports keep the lesson in one of three places, by the export's age: runtime-data.js,
  // a file under locales/ named for the lesson's language (en.js, und.js), or inside index.html.
  let rise = false
  const locales = await readdir(join(dir, 'scormcontent', 'locales')).catch(() => [])
  const holders = ['runtime-data.js', ...locales.sort().map((name) => `locales/${name}`), 'index.html']
  for (const holder of holders) {
    try {
      const wrapped = await readFile(join(dir, 'scormcontent', holder), 'utf8')
      const encoded = wrapped.match(/"([A-Za-z0-9+/=]{2000,})"/)
      if (!encoded) continue
      const lesson = JSON.parse(Buffer.from(encoded[1], 'base64').toString('utf8'))
      await saveJson(join(OUT, 'scorm', `${scorm.id}.json`), lesson.course ?? lesson)
      rise = true
      break
    } catch {
      // Not in this file. A package with the lesson in neither is not Rise: its files are kept as they came.
    }
  }
  return { ...record, rise, path: `moodle/scorm/${scorm.id}`, files: await listFiles(dir) }
})

// Interactive videos and exercises. h5p.json names the content type; content/content.json is
// the content; content/ also holds any media the package carries itself.
const h5pResults = await pool(h5ps, 5, async (activity) => {
  const pack = activity.package?.[0]
  const record = { kind: 'h5p', course: activity.course, id: activity.id, name: activity.name, packageSize: pack?.filesize }
  if (!pack) return { ...record, skipped: 'no package' }
  const dir = join(MEDIA, 'h5p', String(activity.id))
  const stamp = `${pack.filesize}:${pack.timemodified}`
  const done = await marker(dir)
  if (done?.stamp !== stamp) {
    const zip = join(MEDIA, '_packages', `h5p-${activity.id}.h5p`)
    await download(withToken(pack.fileurl), zip, pack.filesize)
    await remove(dir)
    await unzip(zip, dir, { only: ['h5p.json', 'content/*'] })
    await saveJson(join(dir, '.pulled.json'), { stamp })
    await remove(zip)
  }
  const h5p = JSON.parse(await readFile(join(dir, 'h5p.json'), 'utf8'))
  const content = JSON.parse(await readFile(join(dir, 'content', 'content.json'), 'utf8'))
  await saveJson(join(OUT, 'h5p', `${activity.id}.json`), {
    title: h5p.title,
    mainLibrary: h5p.mainLibrary,
    language: h5p.language,
    content,
  })
  return { ...record, mainLibrary: h5p.mainLibrary, path: `moodle/h5p/${activity.id}`, files: await listFiles(dir) }
})

// Page attachments. index.html is the page itself (already in pages.json).
const attachments = pages.flatMap((page) =>
  (page.contentfiles ?? [])
    .filter((file) => file.filename !== 'index.html')
    .map((file) => ({ page, file })),
)
const pageResults = await pool(attachments, 4, async ({ page, file }) => {
  const record = { kind: 'page-file', course: page.course, id: page.id, name: file.filename, size: file.filesize }
  if (file.filename.endsWith('.h5p')) {
    // A page shows an interactive package by naming its file in the page's own text. One a
    // page names is part of the page; one it does not is left over from an earlier edit.
    const named = decodeURIComponent(page.content ?? '').includes(file.filename)
    if (!named) return { ...record, skipped: 'attached to the page but not shown on it' }
    const name = file.filename.replace(/\.h5p$/, '')
    const dir = join(MEDIA, 'pages', String(page.id), name)
    const stamp = `${file.filesize}:${file.timemodified}`
    if ((await marker(dir))?.stamp !== stamp) {
      const zip = join(MEDIA, '_packages', `page-${page.id}-${file.filename}`)
      await download(withToken(file.fileurl), zip, file.filesize)
      await remove(dir)
      await unzip(zip, dir, { only: ['h5p.json', 'content/*'] })
      await saveJson(join(dir, '.pulled.json'), { stamp })
      await remove(zip)
    }
    const h5p = JSON.parse(await readFile(join(dir, 'h5p.json'), 'utf8'))
    const content = JSON.parse(await readFile(join(dir, 'content', 'content.json'), 'utf8'))
    await saveJson(join(OUT, 'page-h5p', String(page.id), `${name}.json`), { title: h5p.title, mainLibrary: h5p.mainLibrary, content })
    return { ...record, kind: 'page-h5p', path: `moodle/pages/${page.id}/${name}`, files: await listFiles(dir) }
  }
  if (file.filesize > PAGE_ATTACHMENT_LIMIT) return { ...record, skipped: 'over 20 MB' }
  const path = join('pages', String(page.id), safeName(file.filename))
  await download(withToken(file.fileurl), join(MEDIA, path), file.filesize)
  return { ...record, path: `moodle/${path}` }
})

for (const [results, source] of [
  [scormResults, scorms],
  [h5pResults, h5ps],
  [pageResults, attachments.map((a) => a.page)],
]) {
  for (const [i, result] of results.entries()) {
    manifest.push(result.ok ? result.value : { id: source[i].id, name: source[i].name, error: result.error })
  }
}
await remove(join(MEDIA, '_packages'))
await saveJson(join(OUT, 'files.json'), manifest)

const kept = manifest.filter((m) => m.path)
const keptBytes = kept.reduce((sum, m) => sum + (m.files ? m.files.reduce((s, f) => s + f.size, 0) : Number(m.size ?? 0)), 0)
console.log(`courses ${courses.length}: ${courseids.join(', ')}`)
console.log(`lecture lessons ${scorms.length}, interactive ${h5ps.length}, pages ${pages.length}, video activities ${videotimeModules.length}`)
console.log(`kept ${kept.length} items, ${megabytes(keptBytes)} MB on disk`)
console.log(`skipped ${manifest.filter((m) => m.skipped).length}, failed ${manifest.filter((m) => m.error).length}`)
for (const m of manifest.filter((m) => m.error)) console.log(`  failed: ${m.name} — ${m.error}`)
