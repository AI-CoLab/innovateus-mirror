// Writes the InnovateUS courses as Markdown lesson files, from what the pull scripts fetched.
//
// Reads   data/moodle/courses.json            the courses
//         data/moodle/contents/<course>.json  each course's sections and activities, in order
//         data/moodle/scorm/<id>.json         each lecture package's lessons (Articulate Rise)
//         data/moodle/h5p/<id>.json           each interactive video or knowledge check
//         data/moodle/{h5pactivities,pages,urls,labels,videotime}.json and quizzes/<id>.json
// Writes  content/courses/<course>/index.md, …/<NN.section>/index.md         a folder's title and summary
//         content/courses/<course>/<NN.section>/<NN.activity>.md             one activity, one lesson
//         content/courses/<course>/<NN.section>/<NN.activity>/<NN.lesson>.md a lecture package's lessons
//         content/_report.json                                               what was written and what was not
//
// A course's folders follow Moodle's own order: its sections, then the activities in each.
// How a lecture package's lessons are written is the contracts repository's Rise converter
// (@aicolab/learning-contracts/convert/rise); every other activity, ./moodle-markdown.mjs.
// Every file is held word for word to its source.
//
// content/ is written whole on every run, from nothing, so a lesson removed at the source is
// removed here; and the same input always writes the same files, so a run that finds nothing
// new changes nothing.
//
// Left out on purpose: the "About you" questionnaires and the certificates (the applet keeps
// its own record of who finished what).

import { readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { DATA, ROOT, loadJson, remove, saveJson, saveText } from './lib.mjs'
import { checkSaid, interactiveVideo, knowledgeCheck, label, link, page, quiz, vimeoActivity, withoutSiteNavigation } from './moodle-markdown.mjs'
import { heading, lessonFiles, lineOf, markdownOf, slugOf } from '@aicolab/learning-contracts/convert/rise'

const OUT = join(ROOT, 'content')
const MOODLE = join(DATA, 'moodle')
const LEFT_OUT = new Set(['questionnaire', 'coursecertificate'])
const numbered = (index, title) => `${String(index + 1).padStart(2, '0')}.${slugOf(title) || 'untitled'}`
const report = { courses: [], lessons: 0, words: 0, byKind: {}, leftOut: {}, locked: [], navigation: 0 }

/** A Moodle record with the site's own navigation taken out of its rich text (./moodle-markdown.mjs). */
const RICH_TEXT = ['intro', 'content', 'summary']
const own = (record) =>
  record && {
    ...record,
    ...Object.fromEntries(
      RICH_TEXT.filter((key) => typeof record[key] === 'string').map((key) => [key, withoutSiteNavigation(record[key], report)]),
    ),
  }
const byKey = (rows, key) => new Map(rows.map((row) => [row[key], own(row)]))

const courses = (await loadJson(join(MOODLE, 'courses.json'))).map(own)
const h5pActivities = byKey(await loadJson(join(MOODLE, 'h5pactivities.json')), 'id')
const pages = byKey(await loadJson(join(MOODLE, 'pages.json')), 'id')
const urls = byKey(await loadJson(join(MOODLE, 'urls.json')), 'id')
const labels = byKey(await loadJson(join(MOODLE, 'labels.json')), 'id')
const vimeo = byKey(await loadJson(join(MOODLE, 'videotime.json')), 'cmid')
const scorms = byKey(await loadJson(join(MOODLE, 'scorms.json')), 'id')

/**
 * A folder's own page: its title and what Moodle says under it. A folder's name is a shortened
 * slug, so its title is written here, as a lesson's is: the first heading of index.md.
 */
async function writeIndex(dir, title, summary, picture) {
  const markdown = [heading(1, lineOf(title)), picture ? `![](<${picture}>)` : '', markdownOf(summary)]
  const { text, words } = checkSaid(title, { markdown, said: [title, summary] })
  await saveText(join(dir, 'index.md'), text)
  report.words += words
}

/** The interactive packages a page shows, by file name (pulled to data/moodle/page-h5p/<page>/). */
async function shownOn(pageId) {
  const dir = join(MOODLE, 'page-h5p', String(pageId))
  const names = await readdir(dir).catch(() => [])
  const shown = new Map()
  for (const name of names) shown.set(name.replace(/\.json$/, '.h5p'), await loadJson(join(dir, name)))
  return shown
}

/** One activity as a single lesson, by Moodle's kind for it. */
const ONE_LESSON = {
  h5pactivity: async (module) => {
    const activity = h5pActivities.get(module.instance)
    const h5p = await loadJson(join(MOODLE, 'h5p', `${module.instance}.json`))
    return h5p.mainLibrary === 'H5P.InteractiveVideo' ? interactiveVideo(activity, h5p) : knowledgeCheck(activity, h5p)
  },
  page: async (module) => page(pages.get(module.instance), await shownOn(module.instance)),
  quiz: async (module) => quiz(own(await loadJson(join(MOODLE, 'quizzes', `${module.instance}.json`)))),
  videotime: async (module) => vimeoActivity(vimeo.get(module.id)),
  url: async (module) => link(urls.get(module.instance)),
  label: async (module) => label(labels.get(module.instance)),
}

const count = (kind, lessons, words) => {
  report.byKind[kind] = (report.byKind[kind] ?? 0) + lessons
  report.lessons += lessons
  report.words += words
}

await remove(OUT)
// Who publishes this content and on what terms, as innovate-us.org's own footer states it.
await saveJson(join(OUT, 'source.json'), {
  id: 'innovateus',
  name: 'InnovateUS',
  home: 'https://innovate-us.org',
  licence: { spdx: 'CC-BY-SA-4.0', url: 'https://creativecommons.org/licenses/by-sa/4.0/' },
  attribution: 'InnovateUS, at the Burnes Center for Social Change, Northeastern University',
})
for (const course of courses) {
  const courseDir = join(OUT, 'courses', slugOf(course.fullname))
  const sections = (await loadJson(join(MOODLE, 'contents', `${course.id}.json`))).map(own)
  const before = report.lessons
  const cover = course.overviewfiles?.[0]
  await writeIndex(courseDir, course.fullname, course.summary, cover && `moodle/courses/${course.id}/${cover.filename}`)
  let sectionIndex = 0
  for (const section of sections) {
    if ((section.modules ?? []).length === 0) continue
    const sectionDir = join(courseDir, numbered(sectionIndex++, section.name))
    await writeIndex(sectionDir, section.name, section.summary)
    for (const [moduleIndex, module] of section.modules.entries()) {
      const name = numbered(moduleIndex, module.name)
      if (LEFT_OUT.has(module.modname)) {
        report.leftOut[module.modname] = (report.leftOut[module.modname] ?? 0) + 1
      } else if (module.uservisible === false) {
        // Moodle lists an activity the account may not open yet (it waits on an earlier one
        // being completed) without handing over what is in it.
        report.locked.push({ course: course.id, activity: module.name, kind: module.modname })
      } else if (module.modname === 'scorm') {
        const rise = await loadJson(join(MOODLE, 'scorm', `${module.instance}.json`))
        const files = lessonFiles(rise, `moodle/scorm/${module.instance}/scormcontent/assets`)
        await writeIndex(join(sectionDir, name), module.name, scorms.get(module.instance)?.intro)
        for (const file of files) await saveText(join(sectionDir, name, file.path), file.markdown)
        count('lecture package', files.length, files.reduce((sum, file) => sum + file.words, 0))
      } else {
        const write = ONE_LESSON[module.modname]
        if (!write) throw new Error(`an activity of a kind this script does not know: ${module.modname}`)
        const { text, words } = checkSaid(module.name, await write(module))
        await saveText(join(sectionDir, `${name}.md`), text)
        count(module.modname, 1, words)
      }
    }
  }
  report.courses.push({ id: course.id, slug: slugOf(course.fullname), title: course.fullname, lessons: report.lessons - before })
}
await saveJson(join(OUT, '_report.json'), report)

console.log(`courses ${report.courses.length}, lessons written ${report.lessons}, words checked ${report.words}`)
console.log(`  ${Object.entries(report.byKind).map(([kind, n]) => `${kind} ${n}`).join(', ')}`)
console.log(`left out on purpose: ${Object.entries(report.leftOut).map(([kind, n]) => `${kind} ${n}`).join(', ')}`)
console.log(`the Moodle site's own navigation blocks taken out: ${report.navigation}`)
for (const item of report.locked) console.log(`locked at the source: course ${item.course}, "${item.activity}" (${item.kind})`)
