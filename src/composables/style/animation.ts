import { computed, type ComputedRef } from 'vue'
import { useDisplay } from 'vuetify'

interface UseAnimation {
  animation: ComputedRef<'fade-left' | 'fade-right' | 'zoom-in'>
}

interface UseAnimationParameters {
  componentType?: 'dialog' | 'timeline'
  index?: number
}

export function useAnimation({ componentType = 'timeline', index = 0 }: UseAnimationParameters): UseAnimation {
  const { smAndDown } = useDisplay()

  const animation = computed(() => {
    if (smAndDown.value) return 'zoom-in'

    const left = componentType === 'timeline' ? 'fade-left' : 'fade-right'
    const right = componentType === 'timeline' ? 'fade-right' : 'fade-left'

    return index % 2 ? left : right
  })

  return { animation }
}
