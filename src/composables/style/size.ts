import { computed, type ComputedRef } from 'vue'
import { useDisplay } from 'vuetify'

const SM_SIZE = 'small'
const DEFAULT_SIZE = 'default'

interface UseSize {
  buttonSize: ComputedRef<'default' | 'small'>
  chipSize: ComputedRef<'default' | 'small'>
  iconSize: ComputedRef<'default' | 'small'>
  timelineSize: ComputedRef<'default' | 'small'>
}

export function useSize(): UseSize {
  const { mdAndDown, smAndDown, xs } = useDisplay()

  const buttonSize = computed(() => (mdAndDown.value ? SM_SIZE : DEFAULT_SIZE))
  const chipSize = buttonSize
  const iconSize = computed(() => (smAndDown.value ? SM_SIZE : DEFAULT_SIZE))
  const timelineSize = computed(() => (xs.value ? SM_SIZE : DEFAULT_SIZE))

  return { buttonSize, chipSize, iconSize, timelineSize }
}
