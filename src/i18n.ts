import { createI18n } from 'vue-i18n'

import en from '@/locales/en'
import fr from '@/locales/fr'

export const SUPPORTED_LOCALES = ['en', 'fr'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]

const DEFAULT_LOCALE: Locale = 'fr'
export const LOCALE_NAMES: Record<Locale, string> = { en: 'English', fr: 'Français' }
export const LOCALE_PATHS: Record<Locale, string> = { en: '/en/', fr: '/' }
export const LOCALE_STORAGE_KEY = 'lang'

export const i18n = createI18n({
  fallbackLocale: DEFAULT_LOCALE,
  fallbackWarn: false,
  legacy: false,
  locale: DEFAULT_LOCALE,
  messages: { en, fr },
  missingWarn: false,
  warnHtmlMessage: false
})

export function setLocale(locale: Locale) {
  i18n.global.locale.value = locale
}

export function localeFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : DEFAULT_LOCALE
}
