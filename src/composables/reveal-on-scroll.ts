import { onBeforeUnmount, onMounted } from 'vue'

// Matches the delay of the reveal-fallback animation in _global.scss.
const REVEAL_FALLBACK_MS = 3_000

export function useRevealOnScroll() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const targets = document.querySelectorAll('[data-reveal]')
    const fallbackShown = performance.now() >= REVEAL_FALLBACK_MS

    document.documentElement.classList.add('reveal-armed')

    if (fallbackShown || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-visible'))

      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )

    targets.forEach((el) => observer?.observe(el))
  })

  onBeforeUnmount(() => observer?.disconnect())
}
