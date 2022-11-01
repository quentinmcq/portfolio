import { computed } from 'vue';

export function useImagePath({ directory, image }) {
  const location = `/assets/img/${directory}/${image}`;
  const path = computed(() => new URL(location, import.meta.url).href);

  return { path };
}
