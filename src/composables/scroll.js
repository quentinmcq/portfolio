import { ref } from 'vue';
import { useEventListener } from '@/composables/event';

const LIMIT_HEIGHT = 980;

export function useScroll() {
  const visible = ref(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEventListener(window, 'scroll', () => (visible.value = window.scrollY > LIMIT_HEIGHT));

  return { visible, scrollToTop };
}
