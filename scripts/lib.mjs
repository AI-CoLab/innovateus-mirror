// Shared helpers for the pull scripts.
//
// Layout the scripts write:
//   data/   records and text, as the sources hold them. Tracked in git.
//   files/  media and documents. Not tracked; each is listed in a files.json under data/.
//
// Every script can be run again: records are rewritten, files already on disk at the
// listed size are kept.

import { createWriteStream } from 'node:fs'
import { mkdir, readFile, rename, rm, stat, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { Readable } from 'node:stream'
import { pipeline } from 'node:stream/promises'
import { fileURLToPath } from 'node:url'

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
export const DATA = join(ROOT, 'data')
export const FILES = join(ROOT, 'files')

const AGENT = 'innovateus-mirror/1 (content mirror; CC BY-SA 4.0)'

export async function request(url, init = {}, attempts = 4) {
  let last
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      const response = await fetch(url, {
        ...init,
        headers: { 'user-agent': AGENT, ...init.headers },
      })
      if (response.status === 429 || response.status >= 500) {
        throw new Error(`${response.status} from ${new URL(url).pathname}`)
      }
      return response
    } catch (error) {
      last = error
      await new Promise((resolve) => setTimeout(resolve, 1500 * attempt))
    }
  }
  throw last
}

export async function getJson(url) {
  const response = await request(url)
  return { status: response.status, body: await response.json() }
}

export async function saveJson(path, value) {
  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`)
}

export async function saveText(path, text) {
  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, text)
}

export async function loadJson(path) {
  return JSON.parse(await readFile(path, 'utf8'))
}

export async function sizeOf(path) {
  try {
    return (await stat(path)).size
  } catch {
    return null
  }
}

/** Streams a URL to disk. Kept as is when a file of the expected size is already there. */
export async function download(url, path, expectedSize) {
  const have = await sizeOf(path)
  if (have !== null && have > 0 && (expectedSize == null || have === Number(expectedSize))) {
    return { path, size: have, fetched: false }
  }
  await mkdir(dirname(path), { recursive: true })
  const response = await request(url)
  if (!response.ok || !response.body) {
    throw new Error(`${response.status} downloading ${new URL(url).pathname}`)
  }
  const partial = `${path}.part`
  await pipeline(Readable.fromWeb(response.body), createWriteStream(partial))
  await rename(partial, path)
  return { path, size: await sizeOf(path), fetched: true }
}

/** Runs `work` over `items`, at most `width` at a time. A failure is returned, not thrown. */
export async function pool(items, width, work) {
  const results = new Array(items.length)
  let next = 0
  async function lane() {
    while (next < items.length) {
      const index = next++
      try {
        results[index] = { ok: true, value: await work(items[index], index) }
      } catch (error) {
        results[index] = { ok: false, error: String(error?.message ?? error) }
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(width, items.length) }, lane))
  return results
}

export async function remove(path) {
  await rm(path, { recursive: true, force: true })
}

/** A file name safe on any disk, keeping the extension. */
export function safeName(name) {
  return name.replace(/[^\w.\- ()]+/g, '_').slice(0, 180)
}

export const megabytes = (bytes) => Math.round(Number(bytes ?? 0) / 1048576)
