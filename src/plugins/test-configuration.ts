import { createI18n } from 'vue-i18n';
import { createVuetify } from 'vuetify';
import { config } from '@vue/test-utils';
import fr from '@/locales/fr';
import en from '@/locales/en';

export const vuetifyInstanceTest = createVuetify({
  global: { ripple: false },
  icons: { iconfont: 'mdiSvg' }
});

export const i18nInstanceTest = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'fr',
  fallbackLocale: 'fr',
  globalInjection: true,
  allowComposition: true,
  // messages: {
  //   fr,
  //   en
  // }
});

config.global.plugins = [vuetifyInstanceTest, i18nInstanceTest];
