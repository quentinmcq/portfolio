import { describe, expect, it } from 'vite-plus/test'

import { routeFromPath, routePath } from './routes'

describe('routes', () => {
  it('reads the language and the project from a path', () => {
    expect(routeFromPath('/')).toEqual({ locale: 'fr' })
    expect(routeFromPath('/en/')).toEqual({ locale: 'en' })
    expect(routeFromPath('/projets/pokebrawl/')).toEqual({ locale: 'fr', slug: 'pokebrawl' })
    expect(routeFromPath('/en/projects/wizard-tomb')).toEqual({ locale: 'en', slug: 'wizard-tomb' })
  })

  it('ignores a project segment of the other language', () => {
    expect(routeFromPath('/projects/pokebrawl/')).toEqual({ locale: 'fr' })
    expect(routeFromPath('/en/projets/pokebrawl/')).toEqual({ locale: 'en' })
  })

  it('writes the path back', () => {
    for (const path of ['/', '/en/', '/projets/pokedate/', '/en/projects/pokedate/']) {
      expect(routePath(routeFromPath(path))).toBe(path)
    }
  })
})
