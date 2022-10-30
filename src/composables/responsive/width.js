import { useDisplay } from 'vuetify';
import { computed } from 'vue';

const XS_WIDTH = '100%';
const MD_WIDTH = '30%';
const DEFAULT_WIDTH = '40%';

export function useWidth() {
  const { smAndDown, lgAndUp } = useDisplay();

  const menuWidth = computed(() =>
    smAndDown.value ? XS_WIDTH : lgAndUp.value ? MD_WIDTH : DEFAULT_WIDTH
  );

  return { menuWidth };
}
