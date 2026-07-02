import { computed, type ComputedRef, onBeforeUnmount, onMounted, ref } from 'vue'

// Tailwind-aligned breakpoints — keep in sync with src/styles/_breakpoints.scss
const BP = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536
}

interface UseBreakpoints {
  lg: ComputedRef<boolean>
  lgAndUp: ComputedRef<boolean>
  md: ComputedRef<boolean>
  mdAndDown: ComputedRef<boolean>
  mdAndUp: ComputedRef<boolean>
  sm: ComputedRef<boolean>
  smAndDown: ComputedRef<boolean>
  width: ComputedRef<number>
  xl: ComputedRef<boolean>
  xxl: ComputedRef<boolean>
  xs: ComputedRef<boolean>
}

// Starts at the desktop default even in the browser so hydration matches the
// prerendered markup — onMounted syncs to the real width before first paint
// of any post-mount update.
const width = ref(1280)
let listenerCount = 0

export function useBreakpoints(): UseBreakpoints {
  onMounted(() => {
    if (listenerCount === 0) {
      window.addEventListener('resize', onResize, { passive: true })
      onResize()
    }
    listenerCount += 1
  })

  onBeforeUnmount(() => {
    listenerCount -= 1
    if (listenerCount === 0) {
      window.removeEventListener('resize', onResize)
    }
  })

  return {
    lg: computed(() => width.value >= BP.lg && width.value < BP.xl),
    lgAndUp: computed(() => width.value >= BP.lg),
    md: computed(() => width.value >= BP.md && width.value < BP.lg),
    mdAndDown: computed(() => width.value < BP.lg),
    mdAndUp: computed(() => width.value >= BP.md),
    sm: computed(() => width.value >= BP.sm && width.value < BP.md),
    smAndDown: computed(() => width.value < BP.md),
    width: computed(() => width.value),
    xl: computed(() => width.value >= BP.xl && width.value < BP.xxl),
    xxl: computed(() => width.value >= BP.xxl),
    xs: computed(() => width.value < BP.sm)
  }
}

function onResize() {
  width.value = window.innerWidth
}
