import { createI18n } from 'vue-i18n';
import { createVuetify } from 'vuetify';

export const vuetifyInstanceTest = createVuetify({
  global: { ripple: false },
  icons: { iconfont: 'mdiSvg' }
});

export const i18nInstanceTest = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'fr',
  fallbackLocale: 'fr',
  globalInjection: true,
  allowComposition: true
  // messages: {
  //     fr,
  //     en
  // }
});
