// Pulls the plain-text copies innovate-us.org publishes of its own pages. No login.
//
// Source:  https://innovate-us.org/llms.txt       the list of pages
//          https://innovate-us.org/llms-full.txt  every page's text in one file
//          <page address>.md                      one page: front matter, text and, for a
//                                                 recorded workshop, the transcript with each
//                                                 paragraph linked to its moment in the video
// Course pages and the fixed pages have no .md copy; those are recorded as absent.
//
// Writes:  data/site/llms.txt, data/site/llms-full.txt, data/site/pages/<path>.md,
//          data/site/_index.json

import { join } from 'node:path'
import { DATA, pool, request, saveJson, saveText } from './lib.mjs'

const SITE = 'https://innovate-us.org'

const list = await (await request(`${SITE}/llms.txt`)).text()
await saveText(join(DATA, 'site', 'llms.txt'), list)
await saveText(join(DATA, 'site', 'llms-full.txt'), await (await request(`${SITE}/llms-full.txt`)).text())

const paths = new Set()
for (const match of list.matchAll(/\]\(https:\/\/innovate-us\.org\/([^)\s]*)\)/g)) {
  const path = match[1].replace(/\/+$/, '').replace(/\.md$/, '')
  if (path) paths.add(path)
}

const pages = [...paths].sort()
const results = await pool(pages, 4, async (path) => {
  const response = await request(`${SITE}/${path}.md`)
  const type = response.headers.get('content-type') ?? ''
  if (!response.ok || !type.includes('markdown')) return { path, copy: false }
  const text = await response.text()
  await saveText(join(DATA, 'site', 'pages', `${path}.md`), text)
  return { path, copy: true, transcript: /^transcript:/m.test(text), characters: text.length }
})

const index = results.map((r, i) => (r.ok ? r.value : { path: pages[i], error: r.error }))
await saveJson(join(DATA, 'site', '_index.json'), { source: SITE, pages: index })

const copies = index.filter((p) => p.copy)
console.log(
  `pages listed ${index.length}, with a text copy ${copies.length}, with a transcript ${copies.filter((p) => p.transcript).length}, errors ${index.filter((p) => p.error).length}`,
)
