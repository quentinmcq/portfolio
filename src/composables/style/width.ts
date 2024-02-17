import { useDisplay } from 'vuetify';
import { computed, type ComputedRef } from 'vue';

interface UseWidth {
  menuWidth: ComputedRef<'100%' | '30%'| '40%'>
}

const XS_WIDTH = '100%';
const MD_WIDTH = '30%';
const DEFAULT_WIDTH = '40%';

export function useWidth(): UseWidth {
  const { smAndDown, lgAndUp } = useDisplay();

  const menuWidth = computed(() =>
    smAndDown.value ? XS_WIDTH : lgAndUp.value ? MD_WIDTH : DEFAULT_WIDTH
  );

  return { menuWidth };
}
