// Pulls the InnovateUS catalogue from the Burnes Center's Directus, which answers without a login.
//
// Source:  https://burnes-center.directus.app  (shared by every Burnes Center / GovLab site)
// Takes:   every collection whose name starts innovate_us / innovateus / google_cert, whole,
//          including drafts and unpublished records. The junction collections (named a_b)
//          hold the links between courses, parts, modules, workshops, series, pathways
//          and instructors.
// Leaves:  the *_translations collections (English only), and the other sites' collections.
// Files:   any file a pulled record points at (by id, or by an /assets/<id> link inside
//          rich text) is listed in data/directus/files.json and downloaded to files/directus/.
//
// Writes:  data/directus/<collection>.json, data/directus/_index.json, data/directus/files.json

import { join } from 'node:path'
import { DATA, FILES, download, getJson, megabytes, pool, saveJson } from './lib.mjs'

const DIRECTUS = 'https://burnes-center.directus.app'
const OURS = /^(innovate_?us|google_cert)/i
const TRANSLATION = /translations/i
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
const ASSET_LINK = /\/assets\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/g

const EXTENSION = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/webp': 'webp',
  'image/avif': 'avif',
  'image/gif': 'gif',
  'image/svg+xml': 'svg',
  'application/pdf': 'pdf',
  'text/vtt': 'vtt',
  'text/plain': 'txt',
  'application/json': 'json',
  'audio/mpeg': 'mp3',
  'video/mp4': 'mp4',
}

function collectFileIds(value, into) {
  if (typeof value === 'string') {
    if (UUID.test(value)) into.add(value)
    else for (const match of value.matchAll(ASSET_LINK)) into.add(match[1])
  } else if (Array.isArray(value)) {
    for (const item of value) collectFileIds(item, into)
  } else if (value && typeof value === 'object') {
    for (const item of Object.values(value)) collectFileIds(item, into)
  }
}

const { body: collections } = await getJson(`${DIRECTUS}/collections`)
const names = collections.data
  .filter((c) => c.schema && OURS.test(c.collection) && !TRANSLATION.test(c.collection))
  .map((c) => c.collection)
  .sort()

const index = []
const referenced = new Set()

const pulled = await pool(names, 4, async (name) => {
  const { status, body } = await getJson(`${DIRECTUS}/items/${name}?limit=-1&fields=*`)
  if (status !== 200) return { name, status, records: 0 }
  const records = Array.isArray(body.data) ? body.data : [body.data]
  records.sort((a, b) => (a?.id > b?.id ? 1 : a?.id < b?.id ? -1 : 0))
  collectFileIds(records, referenced)
  await saveJson(join(DATA, 'directus', `${name}.json`), records)
  return { name, status, records: records.length }
})
for (const [i, result] of pulled.entries()) {
  index.push(result.ok ? result.value : { name: names[i], error: result.error })
}
await saveJson(join(DATA, 'directus', '_index.json'), { source: DIRECTUS, collections: index })

// The file listing is for the whole Directus; keep only what our records point at.
const fields = 'id,filename_download,title,type,filesize,width,height,duration,folder,uploaded_on,description'
const { body: listing } = await getJson(`${DIRECTUS}/files?limit=-1&fields=${fields}`)
const files = listing.data
  .filter((file) => referenced.has(file.id))
  .sort((a, b) => (a.id > b.id ? 1 : -1))
  .map((file) => ({ ...file, path: `directus/${file.id}.${EXTENSION[file.type] ?? 'bin'}` }))

const fetched = await pool(files, 6, (file) =>
  download(`${DIRECTUS}/assets/${file.id}`, join(FILES, file.path), file.filesize),
)
const failures = []
for (const [i, result] of fetched.entries()) {
  if (!result.ok) failures.push({ id: files[i].id, name: files[i].filename_download, error: result.error })
}
await saveJson(join(DATA, 'directus', 'files.json'), { source: `${DIRECTUS}/assets/<id>`, files, failures })

const records = index.reduce((sum, c) => sum + (c.records ?? 0), 0)
const refused = index.filter((c) => c.status !== 200)
console.log(`collections ${index.length}, records ${records}, refused ${refused.length}`)
for (const c of refused) console.log(`  refused: ${c.name} (${c.status ?? c.error})`)
console.log(
  `files ${files.length}, ${megabytes(files.reduce((sum, f) => sum + Number(f.filesize ?? 0), 0))} MB, failed ${failures.length}`,
)
