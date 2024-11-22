import type { ComputedRef } from 'vue'

import { useDensity } from '@/composables/style/density'
import { useRows } from '@/composables/style/rows'
import { useSize } from '@/composables/style/size'
import { useStyle } from '@/composables/style/style'
import { useWidth } from '@/composables/style/width'

interface UseResponsive {
  appStyle: ComputedRef<string>
  buttonSize: ComputedRef<'default' | 'small'>
  chipSize: ComputedRef<'default' | 'small'>
  gridStyle: ComputedRef<object | { gridTemplateColumns: string }>
  iconSize: ComputedRef<'default' | 'small'>
  menuWidth: ComputedRef<'30%' | '40%' | '100%'>
  textAreaRows: ComputedRef<3 | 6>
  timelineDensity: ComputedRef<'compact' | 'default'>
  timelineSize: ComputedRef<'default' | 'small'>
}

export function useResponsive(): UseResponsive {
  const { buttonSize, chipSize, iconSize, timelineSize } = useSize()
  const { menuWidth } = useWidth()
  const { timelineDensity } = useDensity()
  const { textAreaRows } = useRows()
  const { appStyle, gridStyle } = useStyle()

  return {
    appStyle,
    buttonSize,
    chipSize,
    gridStyle,
    iconSize,
    menuWidth,
    textAreaRows,
    timelineDensity,
    timelineSize,
  }
}
