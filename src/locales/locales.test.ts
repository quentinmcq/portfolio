import { describe, expect, it } from 'vite-plus/test'

import { CASES } from '@/data/cases'

import en from './en'
import fr from './fr'

type Entry = [path: string, value: unknown]

const FIGURE_KEYS = ['figure-meta', 'figure-title']

const locales = { en, fr }
const projects = fr.project.list as unknown as { slug?: string; title: string }[]

function entries(node: unknown, prefix = ''): Entry[] {
  if (Array.isArray(node)) {
    return node.flatMap((item, index) => entries(item, `${prefix}[${index}]`))
  }

  if (node !== null && typeof node === 'object') {
    return Object.entries(node as Record<string, unknown>).flatMap(([key, value]) =>
      entries(value, prefix ? `${prefix}.${key}` : key)
    )
  }

  return [[prefix, node]]
}

function keys(messages: unknown): string[] {
  return entries(messages)
    .map(([path]) => path)
    .sort()
}

describe('locales', () => {
  it('describes the same keys, in the same shape, in both languages', () => {
    expect(keys(en)).toEqual(keys(fr))
  })

  it('leaves no message empty', () => {
    for (const [locale, messages] of Object.entries(locales)) {
      const empty = entries(messages)
        .filter(([, value]) => typeof value === 'string' && value.trim().length === 0)
        .map(([path]) => path)

      expect(empty, locale).toEqual([])
    }
  })
})

describe('project cases', () => {
  it('pairs every figure with a project of the index', () => {
    const slugs = projects.flatMap((project) => project.slug ?? [])

    expect(CASES.map((entry) => entry.slug).sort()).toEqual(slugs.sort())
  })

  it('carries the full text of every case in both languages', () => {
    for (const [locale, messages] of Object.entries(locales)) {
      const cases = messages.project.cases as unknown as Record<string, Record<string, unknown>>

      for (const entry of CASES) {
        const block = cases[entry.slug]

        expect(block, `${locale} — ${entry.slug}`).toBeDefined()
        expect(typeof block?.lede).toBe('string')
        expect(Array.isArray(block?.paragraphs)).toBe(true)
        expect(Array.isArray(block?.facts)).toBe(true)

        if (entry.figure.kind === 'image') {
          expect(typeof block?.['figure-alt'], `${locale} — ${entry.slug}`).toBe('string')
        }

        for (const key of FIGURE_KEYS) {
          expect(typeof block?.[key], `${locale} — ${entry.slug} — ${key}`).toBe('string')
        }
      }
    }
  })
})
