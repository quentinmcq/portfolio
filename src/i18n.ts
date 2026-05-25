import type { App } from 'vue'

import { createI18n } from 'vue-i18n'

import en from '@/locales/en'
import fr from '@/locales/fr'

const STORAGE_KEY = 'lang'
const DEFAULT_LOCALE = 'fr'

export function initI18n(app: App): void {
  const locale = readStoredLocale()
  if (typeof document !== 'undefined') document.documentElement.lang = locale

  app.use(createI18n({
    fallbackLocale: DEFAULT_LOCALE,
    fallbackWarn: false,
    locale,
    messages: { en, fr },
    missingWarn: false,
    warnHtmlMessage: false,
  }))
}

function readStoredLocale(): string {
  if (typeof localStorage === 'undefined') return DEFAULT_LOCALE
  return localStorage.getItem(STORAGE_KEY) ?? DEFAULT_LOCALE
}
