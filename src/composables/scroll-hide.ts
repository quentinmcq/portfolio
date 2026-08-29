import { readonly, ref, watch } from 'vue'

import { useWindowScroll } from '@/composables/window-scroll'

const THRESHOLD = 120
const DELTA = 4

export function useScrollHide() {
  const { y } = useWindowScroll()
  const hidden = ref(false)

  watch(y, (current, previous) => {
    if (current < THRESHOLD) {
      hidden.value = false
    } else if (current > previous + DELTA) {
      hidden.value = true
    } else if (current < previous - DELTA) {
      hidden.value = false
    }
  })

  return { hidden: readonly(hidden) }
}
