import { useDisplay } from 'vuetify';
import { computed } from 'vue';

const COMPACT_DENSITY = 'compact';
const DEFAULT_DENSITY = 'default';

export function useDensity() {
  const { smAndDown } = useDisplay();

  const timelineDensity = computed(() =>
    smAndDown.value ? COMPACT_DENSITY : DEFAULT_DENSITY
  );

  return { timelineDensity };
}
