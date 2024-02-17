import { getCurrentInstance } from 'vue';

export function useComponentName() {
  return getCurrentInstance()?.type.__name?.toLowerCase() ?? '';
}