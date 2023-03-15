import { computed } from 'vue';
import { useDisplay } from 'vuetify';

export function useAnimation({ value = 0, type = 'timeline' }) {
  const { smAndDown } = useDisplay();

  if (!Number.isInteger(value)) {
    throw new Error('The provided value must be a number');
  }

  const animation = computed(() => {
    if (smAndDown.value) {
      return 'zoom-in';
    } else if (type === 'timeline') {
      return value % 2 ? 'fade-right' : 'fade-left';
    } else {
      return value % 2 ? 'fade-left' : 'fade-right';
    }
  });

  return { animation };
}
