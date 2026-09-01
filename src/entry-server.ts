import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

import { i18n, type Locale, setLocale } from '@/i18n'

import App from './App.vue'

export async function render(locale: Locale): Promise<string> {
  const app = createSSRApp(App)

  app.use(i18n)
  setLocale(locale)

  return renderToString(app)
}
