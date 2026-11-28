import { createApp, createSSRApp } from 'vue'

import '@/styles/main.scss'

import { syncTheme } from '@/composables/theme'
import { i18n, setLocale } from '@/i18n'
import { routeFromPath, setRoute } from '@/routes'

import App from './App.vue'

const container = document.getElementById('app')

if (!container) {
  throw new Error('#app container missing')
}

const route = routeFromPath(location.pathname)

setRoute(route)
setLocale(route.locale)
document.documentElement.lang = route.locale

const app = container.firstElementChild ? createSSRApp(App) : createApp(App)
app.use(i18n)
app.mount('#app')

syncTheme()

requestAnimationFrame(() => {
  requestAnimationFrame(() => document.documentElement.classList.add('is-rendered'))
})
