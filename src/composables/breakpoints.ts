import { computed, type ComputedRef, onBeforeUnmount, onMounted, ref } from 'vue'

// Tailwind-aligned breakpoints — keep in sync with src/styles/_breakpoints.scss
const BP = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
}

interface UseBreakpoints {
  lg: ComputedRef<boolean> // 1024..1279
  lgAndUp: ComputedRef<boolean> // >=1024
  md: ComputedRef<boolean> // 768..1023
  mdAndDown: ComputedRef<boolean> // <1024
  mdAndUp: ComputedRef<boolean> // >=768
  sm: ComputedRef<boolean> // 640..767
  smAndDown: ComputedRef<boolean> // <768
  width: ComputedRef<number>
  xl: ComputedRef<boolean> // 1280..1535
  xxl: ComputedRef<boolean> // >=1536
  xs: ComputedRef<boolean> // <640
}

const width = ref(typeof window === 'undefined' ? 1280 : window.innerWidth)
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
    xs: computed(() => width.value < BP.sm),
  }
}

function onResize(): void {
  width.value = window.innerWidth
}
