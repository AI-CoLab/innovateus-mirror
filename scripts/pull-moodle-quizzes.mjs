// Pulls the quiz questions from the InnovateUS Moodle. See moodle.mjs for the sign-in.
//
// Moodle only shows a quiz's questions inside an attempt, and only shows the right answers
// in the review of a finished one. So for each quiz without a finished attempt on this
// account, the script starts one, hands it in unanswered, and reads the review. That leaves
// one zero-scored attempt per quiz on the account; later runs reuse it.
//
// Run with a quiz id to do just that quiz:  node scripts/pull-moodle-quizzes.mjs 12
//
// Writes: data/moodle/quizzes/<id>.json — the quiz, and per question its type, its HTML as
//         Moodle rendered it, and the text, choices, right answer and feedback read out of that.

import { join } from 'node:path'
import { DATA, loadJson, saveJson } from './lib.mjs'
import { call } from './moodle.mjs'

const OUT = join(DATA, 'moodle', 'quizzes')

/** Inner HTML of the first <div> whose class list has `name`, found by counting nested divs. */
function divByClass(html, name, from = 0) {
  const open = new RegExp(`<div[^>]*class="[^"]*\\b${name}\\b[^"]*"[^>]*>`, 'g')
  open.lastIndex = from
  const start = open.exec(html)
  if (!start) return null
  const tag = /<(\/?)div\b[^>]*>/g
  tag.lastIndex = open.lastIndex
  let depth = 1
  for (let m = tag.exec(html); m; m = tag.exec(html)) {
    depth += m[1] ? -1 : 1
    if (depth === 0) return { html: html.slice(open.lastIndex, m.index), end: tag.lastIndex }
  }
  return null
}

function allDivsByClass(html, name) {
  const found = []
  for (let at = divByClass(html, name); at; at = divByClass(html, name, at.end)) found.push(at.html)
  return found
}

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', nbsp: ' ', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', mdash: '—', ndash: '–', hellip: '…' }

function text(html) {
  if (html == null) return null
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&(\w+);/g, (whole, name) => ENTITIES[name] ?? whole)
    .replace(/\s+/g, ' ')
    .trim()
}

function readQuestion(question) {
  const html = question.html ?? ''
  return {
    slot: question.slot,
    number: question.questionnumber ?? question.number,
    type: question.type,
    maxmark: question.maxmark,
    text: text(divByClass(html, 'qtext')?.html),
    choices: allDivsByClass(html, 'flex-fill').map(text),
    rightAnswer: text(divByClass(html, 'rightanswer')?.html),
    feedback: text(divByClass(html, 'generalfeedback')?.html),
    html,
  }
}

const quizzes = await loadQuizzes()
const only = process.argv[2] ? Number(process.argv[2]) : null
let questions = 0
let withAnswer = 0
const failed = []

for (const quiz of quizzes) {
  if (only && quiz.id !== only) continue
  try {
    const { attempts } = await call('mod_quiz_get_user_attempts', { quizid: quiz.id, status: 'all' })
    let attempt = attempts.find((a) => a.state === 'finished') ?? attempts.find((a) => a.state === 'inprogress')
    if (!attempt) attempt = (await call('mod_quiz_start_attempt', { quizid: quiz.id })).attempt
    if (attempt.state !== 'finished') {
      await call('mod_quiz_process_attempt', { attemptid: attempt.id, finishattempt: 1 })
    }
    const review = await call('mod_quiz_get_attempt_review', { attemptid: attempt.id, page: -1 })
    const read = review.questions.map(readQuestion)
    questions += read.length
    withAnswer += read.filter((q) => q.rightAnswer).length
    await saveJson(join(OUT, `${quiz.id}.json`), {
      id: quiz.id,
      course: quiz.course,
      coursemodule: quiz.coursemodule,
      name: quiz.name,
      intro: quiz.intro,
      sumgrades: quiz.sumgrades,
      questions: read,
    })
  } catch (error) {
    failed.push(`${quiz.name}: ${error.message}`)
  }
}

console.log(`quizzes ${only ? 1 : quizzes.length}, questions ${questions}, with the right answer shown ${withAnswer}, failed ${failed.length}`)
for (const line of failed) console.log(`  failed: ${line}`)

async function loadQuizzes() {
  const courses = await loadJson(join(DATA, 'moodle', 'courses.json'))
  const { quizzes } = await call('mod_quiz_get_quizzes_by_courses', { courseids: courses.map((c) => c.id) })
  await saveJson(join(DATA, 'moodle', 'quizzes.json'), quizzes)
  return quizzes
}
