import { computed } from 'vue';

export function useRandomNumber({ range }) {
  const randomNumber = computed(() => Math.floor(Math.random() * range));

  return { randomNumber };
}
