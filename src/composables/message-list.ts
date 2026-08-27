import { computed, type ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'

export function useMessageList<T>(key: string): ComputedRef<T[]> {
  const i18n = useI18n()
  return computed(() => i18n.tm<string>(key) as T[])
}
