import { useSize } from '@/composables/responsive/size';
import { useWidth } from '@/composables/responsive/width';
import { useDensity } from '@/composables/responsive/density';
import { useRows } from '@/composables/responsive/rows';
import { useStyle } from '@/composables/responsive/style';
import type {ComputedRef} from 'vue';

interface UseResponsive {
  buttonSize: ComputedRef<'small' | 'default'>;
  chipSize: ComputedRef<'small' | 'default'>;
  iconSize: ComputedRef<'small' | 'default'>;
  timelineSize: ComputedRef<'small' | 'default'>;
  menuWidth: ComputedRef<'100%' | '30%' | '40%'>;
  timelineDensity:  ComputedRef<'default' | 'compact'>;
  textAreaRows:  ComputedRef<3 | 6>
  appStyle: ComputedRef<string>;
  gridStyle: ComputedRef<{} | { gridTemplateColumns: string; }>
}

export function useResponsive(): UseResponsive {
  const { buttonSize, chipSize, iconSize, timelineSize } = useSize();
  const { menuWidth } = useWidth();
  const { timelineDensity } = useDensity();
  const { textAreaRows } = useRows();
  const { appStyle, gridStyle } = useStyle();

  return {
    buttonSize,
    chipSize,
    iconSize,
    timelineSize,
    menuWidth,
    timelineDensity,
    textAreaRows,
    appStyle,
    gridStyle
  };
}
