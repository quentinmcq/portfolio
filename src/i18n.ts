import { createI18n } from 'vue-i18n'

import en from '@/locales/en'
import fr from '@/locales/fr'

export const SUPPORTED_LOCALES = ['en', 'fr'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const LOCALE_NAMES: Record<Locale, string> = { en: 'English', fr: 'Français' }
export const LOCALE_STORAGE_KEY = 'lang'

const DEFAULT_LOCALE: Locale = 'fr'

export const i18n = createI18n({
  fallbackLocale: DEFAULT_LOCALE,
  fallbackWarn: false,
  legacy: false,
  locale: DEFAULT_LOCALE,
  messages: { en, fr },
  missingWarn: false,
  warnHtmlMessage: false
})

export function applyLocale(locale: Locale) {
  i18n.global.locale.value = locale
  document.documentElement.lang = locale
  document.title = `Quentin Macq — ${i18n.global.t('header.role')}`
}

export function resolvePreferredLocale(): Locale {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY)

  if (isSupportedLocale(stored)) {
    return stored
  }

  const nav = navigator.language
  return nav && !nav.toLowerCase().startsWith('fr') ? 'en' : DEFAULT_LOCALE
}

function isSupportedLocale(value: null | string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value ?? '')
}
