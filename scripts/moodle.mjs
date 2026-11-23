// The InnovateUS Moodle (course.innovate-us.org), reached through its app interface.
//
// Course pages there need a signed-in learner. The app interface answers with data when
// given a learner's token:
//
//   curl -s https://course.innovate-us.org/login/token.php \
//     --data-urlencode 'username=…' --data-urlencode 'password=…' \
//     --data-urlencode 'service=moodle_mobile_app' > ~/.innovateus-moodle-token.json
//
// The token is read from that file (or INNOVATEUS_MOODLE_TOKEN) and is never written
// anywhere by these scripts. File addresses Moodle returns are fetched with ?token=.

import { readFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import { join } from 'node:path'
import { request } from './lib.mjs'

export const MOODLE = 'https://course.innovate-us.org'

async function readToken() {
  if (process.env.INNOVATEUS_MOODLE_TOKEN) return process.env.INNOVATEUS_MOODLE_TOKEN
  const saved = JSON.parse(await readFile(join(homedir(), '.innovateus-moodle-token.json'), 'utf8'))
  if (!saved.token) throw new Error(`Moodle refused the sign-in: ${saved.error ?? 'no token in file'}`)
  return saved.token
}

const token = await readToken()

/** Calls one app-interface function. Array and object arguments are flattened the way Moodle expects. */
export async function call(name, args = {}) {
  const form = new URLSearchParams({ wstoken: token, moodlewsrestformat: 'json', wsfunction: name })
  const add = (key, value) => {
    if (Array.isArray(value)) value.forEach((item, i) => add(`${key}[${i}]`, item))
    else if (value && typeof value === 'object') for (const [k, v] of Object.entries(value)) add(`${key}[${k}]`, v)
    else form.append(key, String(value))
  }
  for (const [key, value] of Object.entries(args)) add(key, value)
  const response = await request(`${MOODLE}/webservice/rest/server.php`, { method: 'POST', body: form })
  const body = await response.json()
  if (body && body.exception) throw new Error(`${name}: ${body.errorcode} — ${body.message}`)
  return body
}

/** A Moodle file address with the token attached, for downloading. */
export function withToken(fileUrl) {
  const url = new URL(fileUrl)
  url.searchParams.set('token', token)
  return url.toString()
}
