try {
  const theme = localStorage.getItem('theme')
  const light = theme === 'light' || (!theme && matchMedia('(prefers-color-scheme: light)').matches)
  document.documentElement.classList.toggle('theme-light', light)
  document.documentElement.classList.toggle('theme-dark', !light)
  if (light) document.querySelector('meta[name="theme-color"]').setAttribute('content', '#f5f1e8')
} catch {}

if (location.pathname === '/en' || location.pathname.startsWith('/en/')) {
  document.documentElement.lang = 'en'
  document.addEventListener('DOMContentLoaded', () => {
    for (const el of document.querySelectorAll('[data-en]')) el.textContent = el.dataset.en
    for (const el of document.querySelectorAll('[data-en-href]'))
      el.setAttribute('href', el.dataset.enHref)
  })
}
