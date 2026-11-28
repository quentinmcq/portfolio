import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

import { i18n, setLocale } from '@/i18n'
import { type Route, setRoute } from '@/routes'

import App from './App.vue'

export { CASES } from '@/data/cases'
export { CONTACTS } from '@/data/contacts'
export { default as en } from '@/locales/en'
export { default as fr } from '@/locales/fr'
export { routePath } from '@/routes'

export async function render(route: Route): Promise<string> {
  const app = createSSRApp(App)

  app.use(i18n)
  setRoute(route)
  setLocale(route.locale)

  return renderToString(app)
}
