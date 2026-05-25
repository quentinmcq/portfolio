import { createApp } from 'vue'

import { initI18n } from '@/i18n'

import App from './App.vue'

const app = createApp(App)

initI18n(app)

app.mount('#app')
