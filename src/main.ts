import { initAos } from '@/plugins/aos'
import { initGoogleAnalytics } from '@/plugins/google-analytics'
import { initRecaptcha } from '@/plugins/recaptcha'
import { initI18n } from '@/plugins/v-i18n'
import { initVuetify } from '@/plugins/vuetify'
import { initWebFontLoader } from '@/plugins/webfontloader'
import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)

initAos(app)
initWebFontLoader()
initGoogleAnalytics(app)
initRecaptcha(app)
initVuetify(app)
initI18n(app)

app.mount('#app')
