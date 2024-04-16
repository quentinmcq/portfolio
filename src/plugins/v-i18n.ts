import type { App } from 'vue'

import en from '@/locales/en'
import fr from '@/locales/fr'
import { createI18n } from 'vue-i18n'

export function initI18n(app: App<Element>) {
  const i18nInstance = createI18n({
    allowComposition: true,
    fallbackLocale: 'fr',
    fallbackWarn: false,
    globalInjection: true,
    legacy: false, // Vuetify does not support the legacy mode of vue-i18n
    locale: localStorage.getItem('lang') || 'fr',
    messages: {
      en,
      fr,
    },
    missingWarn: false,
    warnHtmlMessage: false,
  })

  app.use(i18nInstance)
}
