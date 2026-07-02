import type { App } from 'vue'

import { createI18n } from 'vue-i18n'

import en from '@/locales/en'
import fr from '@/locales/fr'

const SUPPORTED_LOCALES = ['en', 'fr'] as const
type Locale = (typeof SUPPORTED_LOCALES)[number]

const DEFAULT_LOCALE: Locale = 'fr'
export const LOCALE_STORAGE_KEY = 'lang'

export function initI18n(app: App) {
  const i18n = createI18n({
    fallbackLocale: DEFAULT_LOCALE,
    fallbackWarn: false,
    legacy: false,
    locale: DEFAULT_LOCALE,
    messages: { en, fr },
    missingWarn: false,
    warnHtmlMessage: false
  })
  app.use(i18n)
  return i18n
}

export function resolvePreferredLocale(): Locale {
  if (typeof localStorage === 'undefined') return DEFAULT_LOCALE

  const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
  if (isSupportedLocale(stored)) return stored

  const nav = typeof navigator === 'undefined' ? '' : navigator.language
  return nav && !nav.toLowerCase().startsWith('fr') ? 'en' : DEFAULT_LOCALE
}

function isSupportedLocale(value: null | string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value ?? '')
}
