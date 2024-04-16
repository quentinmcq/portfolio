import { type ComputedRef, computed } from 'vue'

interface UseImagePath {
  path: ComputedRef<string>
}

interface UseImagePathParameters {
  directory: string
  image: string
}

export function useImagePath({ directory, image }: UseImagePathParameters): UseImagePath {
  const path = computed(() => {
    const location = `/assets/img/${directory}/${image}`
    return new URL(location, import.meta.url).href
  })

  return { path }
}
