import { computed, type ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'

type MessageListKey = 'experience.list' | 'hobby.list' | 'menu' | 'project.list' | 'skill.list'

export function useMessageList<T>(key: MessageListKey): ComputedRef<T[]> {
  const i18n = useI18n()
  return computed(() => i18n.tm<string>(key) as T[])
}
