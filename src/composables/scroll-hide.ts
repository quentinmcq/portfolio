import { onBeforeUnmount, onMounted, readonly, ref } from 'vue'

// Shared scroll-direction state for the floating pills: hides them while the
// user scrolls down (reading), reveals them on scroll up or near the top.
// Single listener shared across consumers, like breakpoints.ts.
const THRESHOLD = 120
const DELTA = 4

const hidden = ref(false)
let lastY = 0
let listeners = 0

function onScroll() {
  const y = window.scrollY
  if (y < THRESHOLD) hidden.value = false
  else if (y > lastY + DELTA) hidden.value = true
  else if (y < lastY - DELTA) hidden.value = false
  lastY = y
}

export function useScrollHide() {
  onMounted(() => {
    if (listeners === 0) {
      lastY = window.scrollY
      window.addEventListener('scroll', onScroll, { passive: true })
    }
    listeners += 1
  })

  onBeforeUnmount(() => {
    listeners -= 1
    if (listeners === 0) window.removeEventListener('scroll', onScroll)
  })

  return { hidden: readonly(hidden) }
}
