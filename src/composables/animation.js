import { computed } from 'vue';

export function useAnimation({ value }) {
  const animation = computed(() => (value % 2 ? 'fade-left' : 'fade-right'));

  return { animation };
}
