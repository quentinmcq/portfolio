import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import i18n from './plugins/v-18n.js';
import writer from 'vue-writer';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import smoothscroll from 'smoothscroll-polyfill';
import { loadFonts } from './plugins/webfontloader';

loadFonts();

const app = createApp(App);

app.AOS = new AOS.init({ offset: 100, duration: 600, disable: ['mobile', 'phone'], once: true });

app.use(vuetify).use(i18n).use(writer);
app.mount('#app');
