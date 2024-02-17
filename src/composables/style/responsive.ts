import { useSize } from '@/composables/style/size';
import { useWidth } from '@/composables/style/width';
import { useDensity } from '@/composables/style/density';
import { useRows } from '@/composables/style/rows';
import { useStyle } from '@/composables/style/style';
import type {ComputedRef} from 'vue';

interface UseResponsive {
  buttonSize: ComputedRef<'small' | 'default'>;
  chipSize: ComputedRef<'small' | 'default'>;
  iconSize: ComputedRef<'small' | 'default'>;
  timelineSize: ComputedRef<'small' | 'default'>;
  menuWidth: ComputedRef<'100%' | '30%' | '40%'>;
  timelineDensity: ComputedRef<'default' | 'compact'>;
  textAreaRows: ComputedRef<3 | 6>
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
