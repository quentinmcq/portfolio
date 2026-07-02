import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

import { initI18n } from '@/i18n'

import App from './App.vue'

export async function render(): Promise<string> {
  const app = createSSRApp(App)
  initI18n(app)
  return renderToString(app)
}
