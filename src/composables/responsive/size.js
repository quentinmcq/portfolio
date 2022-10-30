import { useDisplay } from 'vuetify';
import { computed } from 'vue';

const SM_SIZE = 'small';
const DEFAULT_SIZE = 'default';

export function useSize() {
  const { xs, smAndDown, mdAndDown } = useDisplay();

  const buttonSize = computed(() => (mdAndDown.value ? SM_SIZE : DEFAULT_SIZE));
  const chipSize = buttonSize;
  const iconSize = computed(() => (smAndDown.value ? SM_SIZE : DEFAULT_SIZE));
  const timelineSize = computed(() => (xs.value ? SM_SIZE : DEFAULT_SIZE));

  return { buttonSize, chipSize, iconSize, timelineSize };
}
