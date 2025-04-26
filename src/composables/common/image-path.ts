import { computed, type ComputedRef } from 'vue'

interface UseImagePath {
  path: ComputedRef<string>
}

interface UseImagePathParameters {
  directory?: string
  image: string
}

export function useImagePath({ directory = '', image }: UseImagePathParameters): UseImagePath {
  const path = computed(() => {
    const location = `/src/assets/img/${directory}/${image}`

    return new URL(location, import.meta.url).href
  })

  return { path }
}
