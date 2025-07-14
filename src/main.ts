import { createApp } from 'vue'

import { initAos } from '@/plugins/aos'
import { initGoogleAnalytics } from '@/plugins/google-analytics'
import { initRecaptcha } from '@/plugins/recaptcha'
import { initI18n } from '@/plugins/v-i18n'
import { initVuetify } from '@/plugins/vuetify'
import { initWebFontLoader } from '@/plugins/webfontloader'

// @ts-expect-error cannot find module or its corresponding type declarations.
import App from './App.vue'

const app = createApp(App)

initAos(app)
initWebFontLoader()
initGoogleAnalytics(app)
initRecaptcha(app)
initVuetify(app)
initI18n(app)

app.config.performance = true
app.mount('#app', true)
