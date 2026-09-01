import { createApp, createSSRApp } from 'vue'

import '@/styles/main.scss'

import { syncTheme } from '@/composables/theme'
import { i18n, localeFromPath, setLocale } from '@/i18n'

import App from './App.vue'

const container = document.getElementById('app')

if (!container) {
  throw new Error('#app container missing')
}

const locale = localeFromPath(location.pathname)

setLocale(locale)
document.documentElement.lang = locale

const app = container.firstElementChild ? createSSRApp(App) : createApp(App)
app.use(i18n)
app.mount('#app')

syncTheme()

requestAnimationFrame(() => {
  requestAnimationFrame(() => document.documentElement.classList.add('is-rendered'))
})
