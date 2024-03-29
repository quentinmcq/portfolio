import { createApp } from 'vue';
import App from './App.vue';
import { initWebFontLoader } from '@/plugins/webfontloader';
import { initGoogleAnalytics } from '@/plugins/google-analytics';
import { initVuetify } from '@/plugins/vuetify';
import { initI18n } from '@/plugins/v-i18n';
import { initAos } from '@/plugins/aos';
import { initRecaptcha } from '@/plugins/recaptcha';

const app = createApp(App);

initAos(app);
initWebFontLoader();
initGoogleAnalytics(app);
initRecaptcha(app);
initVuetify(app);
initI18n(app);

app.mount('#app');
