import { onBeforeUnmount, onMounted } from 'vue'

export function useRevealOnScroll() {
  let observer: IntersectionObserver | null = null
  let mutations: MutationObserver | null = null

  function scan() {
    document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => {
      observer?.observe(el)
    })
  }

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') return

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )

    scan()

    mutations = new MutationObserver(scan)
    mutations.observe(document.body, { childList: true, subtree: true })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    mutations?.disconnect()
  })
}
