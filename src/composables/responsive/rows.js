import { computed } from 'vue';
import { useSize } from '@/composables/responsive/size';

const XS_ROWS = 3;
const DEFAULT_ROWS = 6;

export function useRows() {
  const { xs } = useSize();
  const { textAreaRows } = computed(() => (xs.value ? XS_ROWS : DEFAULT_ROWS));

  return { textAreaRows };
}
