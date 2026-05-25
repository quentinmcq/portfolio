import { createApp, vaporInteropPlugin } from 'vue'

import { initI18n } from '@/i18n'

import App from './App.vue'

const app = createApp(App).use(vaporInteropPlugin)

initI18n(app)

app.mount('#app', true)
