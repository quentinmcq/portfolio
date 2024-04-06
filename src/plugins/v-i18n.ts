import { createI18n } from 'vue-i18n'
import fr from '@/locales/fr'
import en from '@/locales/en'
import type { App } from 'vue'

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
