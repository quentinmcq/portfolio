import { getCurrentInstance } from 'vue'

export function useComponentName() {
  const componentName = getCurrentInstance()?.type.__name
  const shortComponentName = componentName?.split('Page')[0]

  return shortComponentName?.toLowerCase() ?? ''
}
