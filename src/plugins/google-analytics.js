import VueGtag from 'vue-gtag';

export function initGoogleAnalytics(app) {
  const initOptions = {
    config: {
      id: import.meta.env.VITE_APP_GA_ID
    }
  };

  app.use(VueGtag, initOptions);
}
