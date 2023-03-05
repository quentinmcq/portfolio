import { computed } from 'vue';

export function useAge() {
  const age = computed(() => {
    const ageDifferenceInMilliseconds =
      Date.now() - new Date('2000/09/20').getTime();
    const formattedAge = new Date(ageDifferenceInMilliseconds).getUTCFullYear();

    return Math.abs(formattedAge - 1970);
  });

  return { age };
}
