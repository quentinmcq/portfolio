import { computed } from 'vue';

export function useRandomNumberGenerator({ range = 5 }) {
  if (!Number.isInteger(range)) {
    throw new Error('The provided range must be a number.');
  }

  const randomNumber = computed(() => Math.floor(Math.random() * range));

  return { randomNumber };
}
