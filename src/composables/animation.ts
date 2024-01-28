import {computed, type ComputedRef, ref, type Ref} from 'vue';
import { useDisplay } from 'vuetify';

interface UseAnimation {
  animation: ComputedRef<'zoom-in' | 'fade-right' | 'fade-left'>;
}

interface UseAnimationParameters {
  index?: Ref<number>;
  componentType?: Ref<'timeline' | 'dialog'>;
}

export function useAnimation({ index = ref(0), componentType = ref('timeline') }: UseAnimationParameters): UseAnimation {
  const { smAndDown } = useDisplay();

  const animation = computed(() => {
    if (smAndDown.value) {
      return 'zoom-in';
    }

    if (componentType === 'timeline') {
      return index % 2 ? 'fade-right' : 'fade-left';
    }

    return index % 2 ? 'fade-left' : 'fade-right';
  });

  return { animation };
}
