import { onBeforeUnmount, onMounted, readonly, ref } from 'vue'

const y = ref(0)
let consumers = 0

function onScroll() {
  y.value = window.scrollY
}

export function useWindowScroll() {
  onMounted(() => {
    if (consumers === 0) {
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
    }

    consumers += 1
  })

  onBeforeUnmount(() => {
    consumers -= 1

    if (consumers === 0) {
      window.removeEventListener('scroll', onScroll)
    }
  })

  return { y: readonly(y) }
}
