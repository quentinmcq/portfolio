import { createApp } from 'vue';
import App from './App.vue';
import { initWebFontLoader } from './plugins/webfontloader';
import { initGoogleAnalytics } from './plugins/google-analytics';
import { initVuetify } from './plugins/vuetify';
import { initI18n } from './plugins/v-i18n';
import { initAos } from './plugins/aos';
import writer from 'vue-writer';

const app = createApp(App);

initWebFontLoader();
initGoogleAnalytics(app);
initVuetify(app);
initI18n(app);
initAos(app);

app.use(writer);
app.mount('#app');
