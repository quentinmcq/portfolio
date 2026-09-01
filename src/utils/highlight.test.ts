import { describe, expect, it } from 'vite-plus/test'

import { CASES } from '@/data/cases'

import { highlight } from './highlight'

const TRICKY = [
  'const label = "double quotes"',
  'const path = `/en/${slug}`',
  'const rule = /^\\s+/u',
  '\tconst indented = 1',
  "const accented = 'éàü — ✓'",
  '   ',
  ''
].join('\n')

function rebuild(source: string): string {
  return highlight(source)
    .map((line) => line.map((token) => token.text).join(''))
    .join('\n')
}

describe('highlight', () => {
  it('never loses a character', () => {
    const sources = CASES.flatMap((entry) =>
      entry.figure.kind === 'code' ? [entry.figure.source] : []
    )

    expect(sources).not.toHaveLength(0)

    for (const source of [...sources, TRICKY]) {
      expect(rebuild(source)).toBe(source)
    }
  })
})
