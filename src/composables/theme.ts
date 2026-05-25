import { ref } from 'vue'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'
const isBrowser = typeof window !== 'undefined'

const theme = ref<Theme>(readInitialTheme())

if (isBrowser) applyTheme(theme.value)

export function useTheme() {
  function toggleTheme(): void {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme(theme.value)
    localStorage.setItem(STORAGE_KEY, theme.value)
  }

  return { theme, toggleTheme }
}

function applyTheme(value: Theme): void {
  const root = document.documentElement
  root.classList.toggle('theme-dark', value === 'dark')
  root.classList.toggle('theme-light', value === 'light')

  const meta = document.querySelector('meta[name="theme-color"]')
  meta?.setAttribute('content', value === 'dark' ? '#0d0d10' : '#f5f1e8')
}

function readInitialTheme(): Theme {
  if (!isBrowser) return 'dark'

  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') return stored

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}
