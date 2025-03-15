import { type Ref } from 'vue'
// @ts-expect-error could not find a declaration file for module
import { event } from 'vue-gtag/dist/vue-gtag.es'

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
