import { computed } from 'vue';

export function useAnimation({ value }) {
  if (isNaN(value)) {
    throw new Error('The provided value must be a number');
  }

  const animation = computed(() => (value % 2 ? 'fade-right' : 'fade-left'));

  return { animation };
}
