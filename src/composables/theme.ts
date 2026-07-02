import { ref } from 'vue'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'
const theme = ref<Theme>('dark')

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme(theme.value)
    localStorage.setItem(STORAGE_KEY, theme.value)
  }

  return { theme, toggleTheme }
}

export function syncTheme() {
  theme.value = readStoredTheme()
}

function applyTheme(value: Theme) {
  const root = document.documentElement
  root.classList.toggle('theme-dark', value === 'dark')
  root.classList.toggle('theme-light', value === 'light')

  const meta = document.querySelector('meta[name="theme-color"]')
  meta?.setAttribute('content', value === 'dark' ? '#0d0d10' : '#f5f1e8')
}

// Same resolution order as the inline head script — keep the two in sync.
function readStoredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') return stored

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}
