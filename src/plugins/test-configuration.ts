import { config } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
// import fr from '@/locales/fr';
// import en from '@/locales/en';

export const vuetifyInstanceTest = createVuetify({
  defaults: {
    global: { ripple: false },
    icons: { iconfont: 'mdiSvg' },
  },
})

export const i18nInstanceTest = createI18n({
  allowComposition: true,
  fallbackLocale: 'fr',
  globalInjection: true,
  legacy: false,
  locale: localStorage.getItem('lang') || 'fr',
  // messages: {
  //   fr,
  //   en
  // }
})

config.global.plugins = [vuetifyInstanceTest, i18nInstanceTest]
