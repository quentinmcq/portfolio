import { event } from 'vue-gtag';

export function useGoogleAnalyticsEvent({
  action,
  category,
  label,
  value = 0
}) {
  try {
    event(action, {
      category,
      label,
      value
    });
  } catch (error) {
    throw { cause: error };
  }
}
