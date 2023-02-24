import { computed } from 'vue';

export function useImagePath({ directory, image }) {
  const path = computed(() => {
    const location = `/assets/img/${directory}/${image}`;
    return new URL(location, import.meta.url).href;
  });

  return { path };
}
