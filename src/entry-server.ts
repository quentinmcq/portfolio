import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

import { i18n } from '@/i18n'

import App from './App.vue'

export async function render(): Promise<string> {
  const app = createSSRApp(App)

  app.use(i18n)

  return renderToString(app)
}
