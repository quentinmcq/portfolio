import { createApp, createSSRApp } from 'vue'

import '@/styles/main.scss'

import { syncTheme } from '@/composables/theme'
import { initI18n, resolvePreferredLocale } from '@/i18n'

import App from './App.vue'

const container = document.getElementById('app')

if (!container) {
  throw new Error('#app container missing')
}

const app = container.firstElementChild ? createSSRApp(App) : createApp(App)
const i18n = initI18n(app)

app.mount('#app')

syncTheme()

const preferred = resolvePreferredLocale()

if (i18n.global.locale.value !== preferred) {
  i18n.global.locale.value = preferred
}

document.documentElement.lang = preferred
