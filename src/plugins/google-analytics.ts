import VueGtag from 'vue-gtag';
import type { App } from 'vue';

export function initGoogleAnalytics(app: App<Element>) {
  const initOptions = {
    config: {
      id: import.meta.env.VITE_APP_GA_ID
    }
  };

  app.use(VueGtag, initOptions);
}
