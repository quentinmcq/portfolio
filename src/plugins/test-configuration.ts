import { config } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'

export const vuetifyInstanceTest = createVuetify({
  defaults: {
    global: { ripple: false },
    icons: { iconfont: 'mdiSvg' },
  },
})

export const i18nInstanceTest = createI18n({
  fallbackLocale: 'fr',
  globalInjection: true,
  legacy: false,
  locale: localStorage.getItem?.('lang') || 'fr',
})

config.global.plugins = [vuetifyInstanceTest, i18nInstanceTest]
