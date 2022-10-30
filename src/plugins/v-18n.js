import { createI18n } from 'vue-i18n';
import fr from '@/locales/fr';
import en from '@/locales/en';

export default createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'fr',
  fallbackLocale: 'fr',
  globalInjection: true,
  allowComposition: true,
  messages: {
    fr,
    en
  }
});
