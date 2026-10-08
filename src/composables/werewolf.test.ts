import { describe, expect, it } from 'vite-plus/test'

import { isHalloweenWeek } from './werewolf'

describe('isHalloweenWeek', () => {
  it.each([
    ['2026-10-23T23:59:00', false],
    ['2026-10-24T00:00:00', true],
    ['2026-10-31T23:59:00', true],
    ['2026-11-01T00:00:00', false],
    ['2026-03-28T12:00:00', false]
  ])('%s → %s', (date, expected) => {
    expect(isHalloweenWeek(new Date(date))).toBe(expected)
  })
})
