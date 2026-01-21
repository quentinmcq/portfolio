import type { App } from 'vue'

import '@mdi/font/css/materialdesignicons.css'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import 'vuetify/styles'

const global = {
  ripple: false,
}

const icons = {
  iconfont: 'mdiSvg',
}

const myCustomDarkTheme: ThemeDefinition = {
  colors: {
    background: '#0F172A',
    error: '#EF4444',
    info: '#3B82F6',
    primary: '#38BDF8',
    secondary: '#818CF8',
    success: '#10B981',
    surface: '#1E293B',
    warning: '#F59E0B',
  },
  dark: true,
}

export function initVuetify(app: App<Element>) {
  const vuetifyInstance = createVuetify({
    defaults: {
      global,
      icons,
      VBtn: {
        height: 44,
        rounded: 'xl',
        style: 'text-transform: none; letter-spacing: 0.5px; font-weight: 600;',
        variant: 'flat',
      },
      VCard: {
        color: 'rgba(30, 41, 59, 0.7)',
        elevation: 0,
        rounded: 'xl',
        style: 'backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.05);',
      },
      VChip: {
        rounded: 'lg',
        variant: 'tonal',
      },
      VSheet: {
        color: 'transparent',
      },
      VTextarea: {
        bgColor: 'rgba(255, 255, 255, 0.03)',
        color: 'primary',
        density: 'comfortable',
        variant: 'outlined',
      },
      VTextField: {
        bgColor: 'rgba(255, 255, 255, 0.03)',
        color: 'primary',
        density: 'comfortable',
        variant: 'outlined',
      },
    },
    theme: {
      defaultTheme: 'myCustomDarkTheme',
      themes: {
        myCustomDarkTheme,
      },
    },
  })

  app.use(vuetifyInstance)
}
