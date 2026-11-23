// Lists where every video lives, from the records already pulled. Nothing is downloaded:
// workshop recordings and trailers stay on YouTube, Vimeo and Zoom and are recorded by address.
// (Lecture video that only exists inside a Moodle lesson package is the exception; the Moodle
// pull keeps it, and it is listed here by its path under files/.)
//
// Finds: the fields that hold a bare video id (a workshop's youtube_video_id, a course's
//        trailer_id, a partner page's Vimeo ids), and any YouTube, Vimeo or Zoom address
//        inside any text of any Directus or Moodle record.
//
// Writes: data/videos.json

import { readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { DATA, loadJson, saveJson } from './lib.mjs'

const ID_FIELDS = {
  youtube_video_id: (id) => ({ host: 'youtube', id, url: `https://www.youtube.com/watch?v=${id}` }),
  trailer_id: (id) => ({ host: 'vimeo', id, url: `https://vimeo.com/${id}` }),
  promotional_vimeo_id: (id) => ({ host: 'vimeo', id, url: `https://vimeo.com/${id}` }),
  module0_trailer_id: (id) => ({ host: 'vimeo', id, url: `https://vimeo.com/${id}` }),
}

const ADDRESSES = [
  { host: 'youtube', pattern: /https?:\/\/(?:www\.)?(?:youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|live\/)|youtu\.be\/)([\w-]{11})/g },
  { host: 'vimeo', pattern: /https?:\/\/(?:player\.)?vimeo\.com\/(?:video\/|progressive_redirect\/playback\/)?(\d{6,})/g },
  { host: 'zoom', pattern: /https?:\/\/[\w.-]*zoom\.us\/rec\/[^\s"'<>\\]+/g },
]

const videos = []
const seen = new Set()

function add(entry) {
  const key = `${entry.record}|${entry.host}|${entry.id ?? entry.url}`
  if (seen.has(key)) return
  seen.add(key)
  videos.push(entry)
}

function scan(value, context, field) {
  if (typeof value === 'string' || typeof value === 'number') {
    const text = String(value)
    if (ID_FIELDS[field] && text.trim()) add({ ...context, field, ...ID_FIELDS[field](text.trim()) })
    if (typeof value !== 'string') return
    for (const { host, pattern } of ADDRESSES) {
      for (const match of text.matchAll(pattern)) {
        add({ ...context, field, host, id: host === 'zoom' ? undefined : match[1], url: host === 'vimeo' ? `https://vimeo.com/${match[1]}` : match[0] })
      }
    }
  } else if (Array.isArray(value)) {
    for (const item of value) scan(item, context, field)
  } else if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) scan(item, context, key)
  }
}

const label = (record) => record?.title ?? record?.course_title ?? record?.course_part_title ?? record?.name ?? record?.slug ?? null

// Directus: one file per collection, each an array of records.
for (const file of (await readdir(join(DATA, 'directus'))).sort()) {
  if (!file.endsWith('.json') || file.startsWith('_') || file === 'files.json') continue
  const collection = file.slice(0, -5)
  for (const record of await loadJson(join(DATA, 'directus', file))) {
    scan(record, { source: 'directus', record: `${collection}/${record?.id}`, title: label(record) }, null)
  }
}

// Moodle: lists of activities, and one file per lesson or interactive package.
const moodle = join(DATA, 'moodle')
for (const list of ['videotime', 'pages', 'urls', 'labels', 'courses']) {
  for (const record of await loadJson(join(moodle, `${list}.json`))) {
    scan(record, { source: 'moodle', record: `${list}/${record.id}`, course: record.course ?? record.id, title: label(record) }, null)
  }
}
for (const kind of ['scorm', 'h5p']) {
  const files = await readdir(join(moodle, kind)).catch(() => [])
  for (const file of files.sort()) {
    const record = await loadJson(join(moodle, kind, file))
    scan(record, { source: 'moodle', record: `${kind}/${file.slice(0, -5)}`, title: label(record) }, null)
  }
}

// Video held on disk, from the Moodle pull's own listing.
const manifest = await loadJson(join(moodle, 'files.json')).catch(() => [])
for (const item of manifest) {
  for (const file of item.files ?? []) {
    if (!/\.(mp4|m4v|webm|mov)$/i.test(file.name)) continue
    add({ source: 'moodle', record: `${item.kind}/${item.id}`, course: item.course, title: item.name, host: 'local', url: `files/${item.path}/${file.name}`, size: file.size })
  }
}

await saveJson(join(DATA, 'videos.json'), videos)

const byHost = {}
for (const video of videos) byHost[video.host] = (byHost[video.host] ?? 0) + 1
console.log(`videos ${videos.length}:`, Object.entries(byHost).map(([host, n]) => `${host} ${n}`).join(', '))
