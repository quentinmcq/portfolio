import {computed, type ComputedRef} from 'vue';

export function useAge(): ComputedRef<number> {
  const ageDifferenceInMilliseconds = Date.now() - new Date('2000/09/20').getTime();
  const formattedAge = new Date(ageDifferenceInMilliseconds).getUTCFullYear();

  return computed(() => Math.abs(formattedAge - 1970));
}
