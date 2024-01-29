/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_EMAILJS_USER_ID: string
    readonly VITE_APP_EMAILJS_SERVICE_ID: string
    readonly VITE_APP_EMAILJS_TEMPLATE_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}