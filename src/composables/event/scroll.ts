import { type Ref, ref } from 'vue'
import { useEventListener } from '@/composables/event/event'
import { useDisplay } from 'vuetify'

const XS_WIDTH = 780
const SM_WIDTH = 1000
const MD_WIDTH = 760
const LG_AND_UP_WIDTH = 630

interface UseScroll {
  visible: Ref<boolean>
  scrollToTop: () => void
}

export function useScroll(): UseScroll {
  const visible = ref(false)
  const { lgAndUp, md, sm, xs } = useDisplay()
  const scrollToTop = () => window.scrollTo({ behavior: 'smooth', top: 0 })
  const limitHeight = ref(0)

  useEventListener(window, 'scroll', () => {
    if (visible.value && window.scrollY > limitHeight.value) return
    setVisible()
  })

  const setVisible = () => {
    if (xs.value) limitHeight.value = XS_WIDTH
    else if (sm.value) limitHeight.value = SM_WIDTH
    else if (md.value) limitHeight.value = MD_WIDTH
    else if (lgAndUp.value) limitHeight.value = LG_AND_UP_WIDTH

    visible.value = window.scrollY > limitHeight.value
  }

  return { scrollToTop, visible }
}
