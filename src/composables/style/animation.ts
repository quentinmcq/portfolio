import { computed, type ComputedRef } from 'vue'
import { useDisplay } from 'vuetify'

interface UseAnimation {
  animation: ComputedRef<'zoom-in' | 'fade-right' | 'fade-left'>
}

interface UseAnimationParameters {
  index?: number
  componentType?: 'timeline' | 'dialog'
}

export function useAnimation({ componentType = 'timeline', index = 0 }: UseAnimationParameters): UseAnimation {
  const { smAndDown } = useDisplay()

  const animation = computed(() => {
    if (smAndDown.value) {
      return 'zoom-in'
    }

    if (componentType === 'timeline') {
      return index % 2 ? 'fade-right' : 'fade-left'
    }

    return index % 2 ? 'fade-left' : 'fade-right'
  })

  return { animation }
}
