// Turns each Moodle activity that is not a lecture package into one Markdown lesson file.
// The file rules and the component names are the contracts repository's
// (@aicolab/learning-contracts); no new name is added.
//
//   interactive video   a `video` whose body holds the questions shown while it plays, each a
//   (H5P)               `knowledge-check` with `at`, the second it appears
//   knowledge check     the questions of InnovateUS's own H5P check, each a `knowledge-check`
//   quiz                a Moodle quiz's questions, each a `knowledge-check`
//   page                its text
//   Vimeo activity      a `video` by address
//   link                a `button` to its address
//   label               its text (a passage Moodle shows between activities)
//
// Each converter answers the Markdown and `said`: the source texts it was written from, in
// order. `checkSaid` holds the two to the same words, as the lecture lessons are held.

import { component, heading, lineOf, markdownOf, textOfHtml, wordsIn, wordsOfMarkdown } from '@aicolab/learning-contracts/convert/rise'

/** A question as a `knowledge-check`. `choices` are { html, correct, feedback? }. */
function check(depth, { kind, at, answer, question, intro, choices = [], feedback = [] }) {
  const lines = choices.map((choice) => {
    const line = `- [${choice.correct ? 'x' : ' '}] ${lineOf(choice.html)}`
    const own = markdownOf(choice.feedback)
    return own ? `${line}\n\n  ${own.replace(/\n/g, '\n  ')}` : line
  })
  const after = feedback
    .map(([when, html]) => [when, markdownOf(html)])
    .filter(([, text]) => text)
    .map(([when, text]) => component(depth + 1, 'feedback', { when }, [text]))
  return component(depth, 'knowledge-check', { kind, at, answer }, [markdownOf(intro), markdownOf(question), lines.join('\n'), ...after])
}

const saidOfCheck = ({ question, intro, choices = [], feedback = [] }) => [
  intro,
  question,
  ...choices.flatMap((choice) => [choice.html, choice.feedback]),
  ...feedback.map(([, html]) => html),
]

/** The questions H5P puts on a video's timeline, each as what `check` takes. */
const H5P_QUESTIONS = {
  'H5P.MultiChoice': (params) => {
    const choices = params.answers.map((answer) => ({
      html: answer.text,
      correct: Boolean(answer.correct),
      feedback: answer.tipsAndFeedback?.chosenFeedback,
    }))
    return [{ kind: choices.filter((choice) => choice.correct).length > 1 ? 'several' : 'one', question: params.question, choices }]
  },
  // The statement is true or false; neither word is the source's, so the answer is an attribute.
  'H5P.TrueFalse': (params) => [{ kind: 'true-false', answer: params.correct, question: params.question }],
  // In a single choice set, and in a summary, H5P lists the right answer first.
  'H5P.SingleChoiceSet': (params) =>
    params.choices.map((choice) => ({
      kind: 'one',
      question: choice.question,
      choices: choice.answers.map((html, index) => ({ html, correct: index === 0 })),
    })),
  'H5P.Summary': (params) =>
    params.summaries
      .filter((set) => (set.summary ?? []).length > 0)
      .map((set, index) => ({
        kind: 'one',
        intro: index === 0 ? params.intro : undefined,
        choices: set.summary.map((html, at) => ({ html, correct: at === 0 })),
      })),
}

const vimeoOf = (address) => {
  const id = address.match(/vimeo\.com\/(?:video\/|progressive_redirect\/playback\/)?(\d+)/)?.[1]
  return id ? `https://vimeo.com/${id}` : null
}

/** An H5P package's file under `base` (its unpacked folder), or the outside address it names. */
const h5pFile = (path, base) => {
  if (!path) return undefined
  if (!/^https?:/.test(path)) return `${base}/content/${path}`
  return vimeoOf(path.replace(/&amp;/g, '&')) ?? path.replace(/&amp;/g, '&')
}

/** An H5P interactive video as a `video` holding its timed questions, and what it was written from. */
function videoWithQuestions(h5p, base) {
  const video = h5p.content.interactiveVideo
  const questions = []
  for (const shown of video.assets?.interactions ?? []) {
    const kind = shown.action.library.split(' ')[0]
    const read = H5P_QUESTIONS[kind]
    if (!read) throw new Error(`an interactive video shows something this script does not know: ${kind}`)
    for (const question of read(shown.action.params)) questions.push({ ...question, at: Math.round(shown.duration.from) })
  }
  const ending = video.summary?.task
  if (ending) {
    const kind = ending.library.split(' ')[0]
    const read = H5P_QUESTIONS[kind]
    if (!read) throw new Error(`an interactive video ends with something this script does not know: ${kind}`)
    for (const question of read(ending.params)) questions.push({ ...question, at: 'end' })
  }
  questions.sort((a, b) => (a.at === 'end' ? 1 : b.at === 'end' ? -1 : a.at - b.at))
  const track = video.video.textTracks?.videoTrack?.find((each) => each.track?.path)
  return {
    markdown: component(
      0,
      'video',
      { src: h5pFile(video.video.files?.[0]?.path, base), captions: h5pFile(track?.track.path, base) },
      questions.map((question) => check(1, question)),
    ),
    said: questions.flatMap(saidOfCheck),
  }
}

export function interactiveVideo(activity, h5p) {
  const video = videoWithQuestions(h5p, `moodle/h5p/${activity.id}`)
  return {
    markdown: [heading(1, lineOf(activity.name)), markdownOf(activity.intro), video.markdown],
    said: [activity.name, activity.intro, ...video.said],
  }
}

export function knowledgeCheck(activity, h5p) {
  const questions = h5p.content.questions.map((question) => ({
    kind: question.multiple ? 'several' : 'one',
    question: question.text,
    choices: question.answers.map((answer) => ({ html: answer.text, correct: Boolean(answer.correct), feedback: answer.feedback })),
  }))
  return {
    markdown: [heading(1, lineOf(activity.name)), markdownOf(activity.intro), ...questions.map((question) => check(0, question))],
    said: [activity.name, activity.intro, ...questions.flatMap(saidOfCheck)],
  }
}

/** A Moodle quiz, from the review the quiz pull read (./pull-moodle-quizzes.mjs). */
export function quiz(read) {
  // Moodle states the answer in a sentence: "The correct answer is: X", or for a question with
  // several, "The correct answers are: X, Y, Z". A choice is right when the sentence holds its
  // words; together the right choices must account for every word of the sentence.
  const words = (text) => wordsIn(text).join(' ')
  const questions = read.questions.map((question) => {
    const right = words((question.rightAnswer ?? '').replace(/^The correct answers? (is|are):\s*/, ''))
    const choices = question.choices.map((text) => ({ html: text, correct: ` ${right} `.includes(` ${words(text)} `) }))
    const found = choices.filter((choice) => choice.correct)
    const accounted = found.reduce((sum, choice) => sum + wordsIn(choice.html).length, 0)
    if (found.length === 0 || accounted !== wordsIn(right).length) {
      throw new Error(`"${read.name}": the stated answer to "${question.text}" does not match its choices`)
    }
    return {
      kind: found.length > 1 ? 'several' : 'one',
      question: question.text,
      choices,
      feedback: [['always', question.feedback]],
    }
  })
  return {
    markdown: [heading(1, lineOf(read.name)), markdownOf(read.intro), ...questions.map((question) => check(0, question))],
    said: [read.name, read.intro, ...questions.flatMap(saidOfCheck)],
  }
}

/**
 * A page's text. Two things in a page's markup are not prose and are written as what they are:
 *   - a fold-out section (`<details>`), as an `accordion` of one item, its summary the item's title;
 *   - an interactive package the page shows (Moodle writes its file's address in a placeholder),
 *     as the `video` it is. `shown` holds each package the page names, by its file's name.
 */
export function page(record, shown = new Map()) {
  const SPECIAL = /<details[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>|<div class="h5p-placeholder"[^>]*>([^<]+)<\/div>/g
  const markdown = [heading(1, lineOf(record.name)), markdownOf(record.intro)]
  const said = [record.name, record.intro]
  const prose = (html) => {
    markdown.push(markdownOf(html))
    said.push(html)
  }
  let from = 0
  for (const found of record.content.matchAll(SPECIAL)) {
    prose(record.content.slice(from, found.index))
    from = found.index + found[0].length
    const [, summary, folded, address] = found
    if (address === undefined) {
      const item = component(1, 'accordion-item', {}, [heading(3, lineOf(summary)), markdownOf(folded)])
      markdown.push(component(0, 'accordion', {}, [item]))
      said.push(summary, folded)
      continue
    }
    const file = decodeURIComponent(address.trim().split('/').pop())
    const h5p = shown.get(file)
    if (!h5p) throw new Error(`"${record.name}" shows a package that was not pulled: ${file}`)
    if (h5p.mainLibrary !== 'H5P.InteractiveVideo') throw new Error(`"${record.name}" shows a package of a kind this script does not know: ${h5p.mainLibrary}`)
    const video = videoWithQuestions(h5p, `moodle/pages/${record.id}/${file.replace(/\.h5p$/, '')}`)
    markdown.push(video.markdown)
    said.push(...video.said)
  }
  prose(record.content.slice(from))
  return { markdown, said }
}

export const vimeoActivity = (record) => ({
  markdown: [
    heading(1, lineOf(record.name)),
    markdownOf(record.intro),
    component(0, 'video', { src: record.vimeo_url }, [markdownOf(record.video_description)]),
  ],
  said: [record.name, record.intro, record.video_description],
})

export const link = (record) => ({
  markdown: [heading(1, lineOf(record.name)), markdownOf(record.intro), component(0, 'button', { to: record.externalurl }, [])],
  said: [record.name, record.intro],
})

/** A label is its text. Where the text opens with no heading, Moodle's name for it is the title. */
export function label(record) {
  const text = markdownOf(record.intro)
  if (/^#{1,6} /.test(text)) return { markdown: [text.replace(/^#{1,6} /, '# ')], said: [record.intro] }
  return { markdown: [heading(1, lineOf(record.name)), text], said: [record.name, record.intro] }
}

/** The file's text, held word for word to what it was written from. */
export function checkSaid(name, { markdown, said }) {
  const text = `${markdown.filter(Boolean).join('\n\n')}\n`
  const from = wordsIn(said.map((html) => textOfHtml(html)).join(' '))
  const to = wordsOfMarkdown(text)
  for (let i = 0; i < Math.max(from.length, to.length); i++) {
    if (from[i] !== to[i]) {
      const around = (words) => words.slice(Math.max(0, i - 4), i + 5).join(' ')
      throw new Error(`words differ at word ${i + 1} of "${name}":\n  source:   … ${around(from)} …\n  markdown: … ${around(to)} …`)
    }
  }
  return { text, words: from.length }
}
