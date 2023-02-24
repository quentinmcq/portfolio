import { ref } from 'vue';
import { useEventListener } from '@/composables/event';

export function useScroll({ limitHeight = 980 } = {}) {
  const visible = ref(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEventListener(window, 'scroll', () => (visible.value = window.scrollY > limitHeight));

  return { visible, scrollToTop };
}
