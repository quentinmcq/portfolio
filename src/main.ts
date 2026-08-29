import { createApp, createSSRApp } from 'vue'

import '@/styles/main.scss'

import { syncTheme } from '@/composables/theme'
import { applyLocale, i18n, resolvePreferredLocale } from '@/i18n'

import App from './App.vue'

const container = document.getElementById('app')

if (!container) {
  throw new Error('#app container missing')
}

const app = container.firstElementChild ? createSSRApp(App) : createApp(App)
app.use(i18n)
app.mount('#app')

syncTheme()

const preferred = resolvePreferredLocale()

if (i18n.global.locale.value !== preferred) {
  applyLocale(preferred)
}
