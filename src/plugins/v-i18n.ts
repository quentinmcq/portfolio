import type { App } from 'vue'

import { createI18n } from 'vue-i18n'

import en from '@/locales/en'
import fr from '@/locales/fr'

export function initI18n(app: App<Element>) {
  const i18nInstance = createI18n({
    fallbackLocale: 'fr',
    fallbackWarn: false,
    globalInjection: true,
    legacy: false,
    locale: localStorage?.getItem('lang') || 'fr',
    messages: {
      en,
      fr,
    },
    missingWarn: false,
    mode: 'composition',
    warnHtmlMessage: false,
  })

  app.use(i18nInstance)
}
