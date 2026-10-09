if (location.pathname === '/en' || location.pathname.startsWith('/en/')) {
  document.documentElement.lang = 'en'
  for (const el of document.querySelectorAll('[data-en]')) el.textContent = el.dataset.en
  for (const el of document.querySelectorAll('[data-en-href]'))
    el.setAttribute('href', el.dataset.enHref)
}
