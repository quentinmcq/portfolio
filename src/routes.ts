import { shallowRef } from 'vue'

import { LOCALE_PATHS, localeFromPath, type Locale } from '@/i18n'

const PROJECT_PREFIXES: Record<Locale, string> = { en: '/en/projects/', fr: '/projets/' }

export interface Route {
  locale: Locale
  slug?: string
}

export const route = shallowRef<Route>({ locale: 'fr' })

export function setRoute(next: Route) {
  route.value = next
}

export function routePath({ locale, slug }: Route): string {
  return slug ? `${PROJECT_PREFIXES[locale]}${slug}/` : LOCALE_PATHS[locale]
}

export function routeFromPath(pathname: string): Route {
  const locale = localeFromPath(pathname)
  const prefix = PROJECT_PREFIXES[locale]

  if (!pathname.startsWith(prefix)) {
    return { locale }
  }

  const slug = pathname.slice(prefix.length).replace(/\/$/, '')

  return /^[a-z0-9-]+$/.test(slug) ? { locale, slug } : { locale }
}
