import { computed, type ComputedRef } from 'vue';
import { useDisplay } from "vuetify";

const XS_ROWS = 3;
const DEFAULT_ROWS = 6;

interface UseRows {
  textAreaRows: ComputedRef<3 | 6>;
}

export function useRows(): UseRows {
  const { xs } = useDisplay();
  const textAreaRows = computed(() => (xs.value ? XS_ROWS : DEFAULT_ROWS));

  return { textAreaRows };
}
