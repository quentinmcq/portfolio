import { event } from 'vue-gtag';

export function useGoogleAnalyticsEvent({ action, event_category, event_label, value }) {
  try {
    event(action, {
      event_category,
      event_label,
      value
    });
  } catch (error) {
    throw { cause: error };
  }
}
