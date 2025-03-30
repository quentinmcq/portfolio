import { event } from 'vue-gtag'

interface UseGoogleAnalyticsEvent {
  action: string
  category: string
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
    // @ts-expect-error argument of type string is not assignable to parameter of type GtagEventNames
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
