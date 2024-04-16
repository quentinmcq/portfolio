import type { App } from 'vue'

import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

export function initRecaptcha(app: App<Element>) {
  app.use(VueRecaptchaPlugin, {
    v3SiteKey: import.meta.env.VITE_APP_RECAPTCHA_V3_SITE_KEY,
  })
}
