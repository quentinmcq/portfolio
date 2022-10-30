import { computed } from 'vue';

export function useImagePath({ mainDirectory = 'pages', directory, image }) {
  const location = `../${mainDirectory}/${directory}/img/${image}`;
  const path = computed(() => new URL(location, import.meta.url).href);

  return { path };
}
