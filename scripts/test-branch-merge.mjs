// Tests the localisation model on the real lesson files: the source's text on one branch,
// our rewrite on another, and a merge that stops only where the source changed something
// we rewrote.
//
// It copies content/ into a new git repository in a temporary folder (this repository's own
// history is not touched), then plays out one round:
//
//   upstream    the lesson files as the conversion wrote them
//   localised   branched from upstream; one paragraph of one lesson rewritten for Australia
//   upstream    then changes three things in that lesson:
//                 A  the paragraph we rewrote
//                 B  a paragraph we did not touch
//                 C  a new paragraph added at the end
//   merge       upstream into localised
//
// Expected: one conflict, at A, showing our wording against theirs; B and C arrive on their
// own; no other file is touched. Anything else fails the test.
//
// Run: node scripts/test-branch-merge.mjs

import { execFileSync } from 'node:child_process'
import { cpSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { ROOT } from './lib.mjs'

const repo = mkdtempSync(join(tmpdir(), 'lesson-merge-'))
const git = (...args) =>
  execFileSync('git', ['-c', 'user.name=test', '-c', 'user.email=test@example.invalid', ...args], { cwd: repo, encoding: 'utf8' })
const fail = (why) => {
  rmSync(repo, { recursive: true, force: true })
  console.error(`FAILED: ${why}`)
  process.exit(1)
}

/** The first lesson file with at least four plain paragraphs to work on. */
function pickLesson(dir) {
  for (const name of readdirSync(dir).sort()) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) {
      const found = pickLesson(path)
      if (found) return found
    } else if (name.endsWith('.md')) {
      const prose = readFileSync(path, 'utf8')
        .split('\n')
        .filter((line) => /^[A-Z][^:#]{80,}$/.test(line))
      if (prose.length >= 4) return { path, prose }
    }
  }
  return null
}

cpSync(join(ROOT, 'content'), join(repo, 'content'), { recursive: true })
git('init', '-q', '-b', 'upstream')
git('add', '-A')
git('commit', '-q', '-m', 'the source, as converted')

const lesson = pickLesson(join(repo, 'content', 'courses'))
if (!lesson) fail('no lesson with four paragraphs of prose was found')
const [ours, theirsToo, untouched] = [lesson.prose[0], lesson.prose[0], lesson.prose[2]]
const edit = (change) => writeFileSync(lesson.path, change(readFileSync(lesson.path, 'utf8')))

git('checkout', '-q', '-b', 'localised')
const localWording = `${ours.replace(/\.$/, '')}, as Australian agencies would recognise it.`
edit((text) => text.replace(ours, localWording))
git('commit', '-q', '-am', 'rewritten for Australia')

git('checkout', '-q', 'upstream')
const sourceWordingA = `${theirsToo} The source has since revised this paragraph.`
const sourceWordingB = `${untouched} The source has since added this sentence.`
const sourceParagraphC = 'A new paragraph the source added after we branched.'
edit((text) => `${text.replace(theirsToo, sourceWordingA).replace(untouched, sourceWordingB)}\n${sourceParagraphC}\n`)
git('commit', '-q', '-am', 'the source changed three things')

git('checkout', '-q', 'localised')
let merged = true
try {
  git('merge', '--no-edit', 'upstream')
} catch {
  merged = false
}
if (merged) fail('the merge went through with no conflict, though the source changed a paragraph we rewrote')

const conflicted = git('diff', '--name-only', '--diff-filter=U').trim().split('\n').filter(Boolean)
if (conflicted.length !== 1) fail(`${conflicted.length} files are in conflict, expected exactly one`)

const result = readFileSync(lesson.path, 'utf8')
const blocks = result.match(/^<<<<<<< [\s\S]*?^>>>>>>> .*$/gm) ?? []
if (blocks.length !== 1) fail(`${blocks.length} conflicts in the lesson, expected exactly one`)
if (!blocks[0].includes(localWording) || !blocks[0].includes(sourceWordingA)) {
  fail('the conflict does not show our wording against the source’s for the paragraph we both changed')
}
const outside = result.replace(blocks[0], '')
if (!outside.includes(sourceWordingB)) fail('the source’s change to an untouched paragraph did not arrive')
if (!outside.includes(sourceParagraphC)) fail('the paragraph the source added did not arrive')
if (blocks[0].includes(sourceWordingB) || blocks[0].includes(sourceParagraphC)) {
  fail('a change we never touched was caught up in the conflict')
}

rmSync(repo, { recursive: true, force: true })
console.log(`passed, on ${lesson.path.split('/content/')[1]}`)
console.log('  one conflict, at the paragraph both sides changed, showing both wordings')
console.log('  the source’s change to an untouched paragraph arrived on its own')
console.log('  the source’s new paragraph arrived on its own')
