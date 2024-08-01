import { computed, type ComputedRef } from 'vue'
import { useDisplay } from 'vuetify'

interface UseWidth {
  menuWidth: ComputedRef<'30%' | '40%' | '100%'>
}

const XS_WIDTH = '100%'
const MD_WIDTH = '30%'
const DEFAULT_WIDTH = '40%'

export function useWidth(): UseWidth {
  const { lgAndUp, smAndDown } = useDisplay()

  const menuWidth = computed(() =>
    smAndDown.value ? XS_WIDTH : lgAndUp.value ? MD_WIDTH : DEFAULT_WIDTH,
  )

  return { menuWidth }
}
