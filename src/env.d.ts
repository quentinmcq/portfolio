declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent
  export default component
}

interface ImportMetaEnv {
  readonly VITE_TURNSTILE_SITE_KEY?: string
}

interface TurnstileRenderOptions {
  sitekey: string
  callback?: (token: string) => void
  'expired-callback'?: () => void
  'error-callback'?: () => void
  theme?: 'auto' | 'dark' | 'light'
  action?: string
  execution?: 'execute' | 'render'
  appearance?: 'always' | 'execute' | 'interaction-only'
}

interface Turnstile {
  render: (element: HTMLElement, options: TurnstileRenderOptions) => string
  execute: (widgetId?: string, options?: TurnstileRenderOptions) => void
  reset: (widgetId?: string) => void
  remove: (widgetId?: string) => void
  getResponse: (widgetId?: string) => string | undefined
}

interface Window {
  turnstile?: Turnstile
}
