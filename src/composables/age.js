import { computed } from 'vue';

export function useAge(birthDate) {
  const age = computed(() => {
    const ageDifferenceInMilliseconds = Date.now() - new Date(birthDate).getTime();
    const formattedAge = new Date(ageDifferenceInMilliseconds).getUTCFullYear();

    return Math.abs(formattedAge - 1970);
  });

  return { age };
}
