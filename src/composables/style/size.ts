import { useDisplay } from 'vuetify'
import { computed, type ComputedRef } from 'vue'

const SM_SIZE = 'small'
const DEFAULT_SIZE = 'default'

interface UseSize {
  buttonSize: ComputedRef<'small' | 'default'>
  chipSize: ComputedRef<'small' | 'default'>
  iconSize: ComputedRef<'small' | 'default'>
  timelineSize: ComputedRef<'small' | 'default'>
}

export function useSize(): UseSize {
  const { mdAndDown, smAndDown, xs } = useDisplay()

  const buttonSize = computed(() => (mdAndDown.value ? SM_SIZE : DEFAULT_SIZE))
  const chipSize = buttonSize
  const iconSize = computed(() => (smAndDown.value ? SM_SIZE : DEFAULT_SIZE))
  const timelineSize = computed(() => (xs.value ? SM_SIZE : DEFAULT_SIZE))

  return { buttonSize, chipSize, iconSize, timelineSize }
}
