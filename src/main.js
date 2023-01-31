import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import i18n from './plugins/v-18n.js';
import writer from 'vue-writer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { loadFonts } from './plugins/webfontloader';
import { loadConfig } from './plugins/google-analytics';
import VueGtag from 'vue-gtag';

loadFonts();

const app = createApp(App);

app.AOS = new AOS.init({ offset: 100, duration: 600, disable: ['mobile', 'phone'], once: true });

app.use(vuetify).use(i18n).use(writer).use(VueGtag, loadConfig());
app.mount('#app');
