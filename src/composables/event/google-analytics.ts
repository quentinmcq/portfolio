import { type Ref } from 'vue'
import { event } from 'vue-gtag'

interface UseGoogleAnalyticsEvent {
  action: string
  category: Ref<string> | string
  label: string
  value?: number
}

export function useGoogleAnalyticsEvent({
  action,
  category,
  label,
  value = 0,
}: UseGoogleAnalyticsEvent): void {
  try {
    event(action, {
      category,
      label,
      value,
    })
  }
  catch (error) {
    throw { cause: error }
  }
}
