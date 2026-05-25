import { onBeforeUnmount, onMounted } from 'vue'

// Wires up two observers that drive `[data-reveal]` → `.is-visible` reveals
// across the whole document. The mutation observer makes sure elements
// rendered after the initial paint (e.g. lazy-mounted sections) are picked
// up automatically.
export function useRevealOnScroll(): void {
  let intersection: IntersectionObserver | null = null
  let mutation: MutationObserver | null = null

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') return

    intersection = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          intersection?.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )

    observeAll()

    mutation = new MutationObserver(observeAll)
    mutation.observe(document.body, { childList: true, subtree: true })
  })

  onBeforeUnmount(() => {
    intersection?.disconnect()
    mutation?.disconnect()
  })

  function observeAll(): void {
    document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => {
      intersection?.observe(el)
    })
  }
}
