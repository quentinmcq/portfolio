import { readonly, ref } from 'vue'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'
const THEME_COLOR: Record<Theme, string> = { dark: '#0d0d10', light: '#f5f1e8' }
const theme = ref<Theme>('dark')

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme(theme.value)
    localStorage.setItem(STORAGE_KEY, theme.value)
  }

  return { theme: readonly(theme), toggleTheme }
}

export function syncTheme() {
  theme.value = document.documentElement.classList.contains('theme-light') ? 'light' : 'dark'
}

function applyTheme(value: Theme) {
  const root = document.documentElement

  root.classList.toggle('theme-dark', value === 'dark')
  root.classList.toggle('theme-light', value === 'light')

  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[value])
}
