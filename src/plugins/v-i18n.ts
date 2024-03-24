import { createI18n } from 'vue-i18n';
import fr from '@/locales/fr';
import en from '@/locales/en';
import type { App } from 'vue';

export function initI18n(app: App<Element>) {
  const i18nInstance = createI18n({
    legacy: false, // Vuetify does not support the legacy mode of vue-i18n
    locale: localStorage.getItem('lang') || 'fr',
    fallbackLocale: 'fr',
    missingWarn: false,
    fallbackWarn: false,
    globalInjection: true,
    allowComposition: true,
    warnHtmlMessage: false,
    messages: {
      fr,
      en
    }
  });

  app.use(i18nInstance);
}
