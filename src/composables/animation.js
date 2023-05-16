import { computed } from 'vue';
import { useDisplay } from 'vuetify';

export function useAnimation({ index = 0, componentType = 'timeline' }) {
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
