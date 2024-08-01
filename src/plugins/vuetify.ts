import type { App } from 'vue'

import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const global = {
  ripple: false,
}

const icons = {
  iconfont: 'mdiSvg',
}

export function initVuetify(app: App<Element>) {
  const vuetifyInstance = createVuetify({
    defaults: {
      global,
      icons,
      VBtn: {
        style: 'transition: transform 0.6s',
      },
      VChip: {
        style: 'transition: transform 0.6s',
      },
      VContainer: {
        style: 'padding: 14px',
      },
    },
  })

  app.use(vuetifyInstance)
}
