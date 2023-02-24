import { computed } from 'vue';

export function useRandomNumberGenerator({ range }) {
  if (typeof range !== 'number' || range <= 0) {
    throw new Error('La plage de valeurs doit être un nombre positif.');
  }

  const randomNumber = computed(() => Math.floor(Math.random() * range));

  return { randomNumber };
}
