import { computed, type ComputedRef } from 'vue'

interface UseImagePath {
  path: ComputedRef<string>
}

interface UseImagePathParameters {
  directory?: string
  image: string
}

export function useImagePath({ directory = '', image }: UseImagePathParameters): UseImagePath {
  const path = computed(() => `/assets/img/${directory}/${image}`)

  return { path }
}
