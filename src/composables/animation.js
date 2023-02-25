import { computed } from 'vue';

export function useAnimation({ value = 0 }) {
  if (!Number.isInteger(value)) {
    throw new Error('The provided value must be a number');
  }

  const animation = computed(() => (value % 2 ? 'fade-right' : 'fade-left'));

  return { animation };
}
