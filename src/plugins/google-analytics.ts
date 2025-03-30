import type { App } from 'vue'

import { createGtag } from 'vue-gtag'

export function initGoogleAnalytics(app: App<Element>) {
  const gtag = createGtag({
    initMode: 'manual',
    tagId: import.meta.env.VITE_APP_GA_ID,
  })

  app.use(gtag)
}
