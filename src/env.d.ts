/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly VITE_APP_EMAILJS_SERVICE_ID: string
  readonly VITE_APP_EMAILJS_TEMPLATE_ID: string
  readonly VITE_APP_EMAILJS_USER_ID: string
  readonly VITE_APP_GA_ID: string
  readonly VITE_APP_RECAPTCHA_V3_SITE_KEY: string
}
