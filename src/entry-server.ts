import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

import { i18n, type Locale, setLocale } from '@/i18n'

import App from './App.vue'

export { CASES } from '@/data/cases'
export { CONTACTS } from '@/data/contacts'
export { default as en } from '@/locales/en'
export { default as fr } from '@/locales/fr'

export async function render(locale: Locale): Promise<string> {
  const app = createSSRApp(App)

  app.use(i18n)
  setLocale(locale)

  return renderToString(app)
}
