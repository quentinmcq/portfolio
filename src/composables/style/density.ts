import { computed, type ComputedRef } from 'vue'
import { useDisplay } from 'vuetify'

interface UseDensity {
  timelineDensity: ComputedRef<'compact' | 'default'>
}

const COMPACT_DENSITY = 'compact'
const DEFAULT_DENSITY = 'default'

export function useDensity(): UseDensity {
  const { smAndDown } = useDisplay()

  const timelineDensity = computed(() =>
    smAndDown.value ? COMPACT_DENSITY : DEFAULT_DENSITY,
  )

  return { timelineDensity }
}
