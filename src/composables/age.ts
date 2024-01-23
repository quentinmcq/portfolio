import {computed, ComputedRef} from 'vue';

interface UseAge {
  age: ComputedRef<number>;
}

export function useAge(): UseAge {
  const age = computed(() => {
    const ageDifferenceInMilliseconds =
      Date.now() - new Date('2000/09/20').getTime();
    const formattedAge = new Date(ageDifferenceInMilliseconds).getUTCFullYear();

    return Math.abs(formattedAge - 1970);
  });

  return { age };
}
