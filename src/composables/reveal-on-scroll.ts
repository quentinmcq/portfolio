import { onBeforeUnmount, onMounted } from 'vue'

// Drives `[data-reveal]` → `.is-visible` reveals across the document.
// Assumes all reveal targets exist after the initial mount — if you ever
// lazy-load sections, observe newly-inserted nodes here.
export function useRevealOnScroll() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') return

    // Defer setup past first paint — the querySelectorAll + observe pass
    // forces a layout pass that would otherwise block LCP.
    const setup = () => {
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

      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => {
        observer?.observe(el)
      })
    }

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(setup, { timeout: 200 })
    } else {
      requestAnimationFrame(setup)
    }
  })

  onBeforeUnmount(() => observer?.disconnect())
}
