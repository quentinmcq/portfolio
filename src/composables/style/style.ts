import { computed, type ComputedRef } from 'vue'
import { useDisplay } from 'vuetify'

interface UseStyle {
  appStyle: ComputedRef<string>
  gridStyle: ComputedRef<{ gridTemplateColumns: string } | object>
}

export function useStyle(): UseStyle {
  const { name, xs } = useDisplay()

  const appStyle = computed(() => {
    return (
      {
        lg: 'width: 55%',
        md: 'width: 76%',
        sm: 'width: 85%',
        xl: 'width: 55%',
        xs: 'width: 100%',
        xxl: 'width: 55%',
      }[name.value] ?? 'width: 50%'
    )
  })

  const gridStyle = computed(() =>
    xs.value ? {} : { gridTemplateColumns: 'repeat(2, 1fr)' },
  )

  return { appStyle, gridStyle }
}
