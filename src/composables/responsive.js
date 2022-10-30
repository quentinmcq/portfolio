import { useSize } from '@/composables/responsive/size';
import { useWidth } from '@/composables/responsive/width';
import { useDensity } from '@/composables/responsive/density';
import { useRows } from '@/composables/responsive/rows';
import { useStyle } from '@/composables/responsive/style';

export function useResponsive() {
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
