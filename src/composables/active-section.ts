import { onBeforeUnmount, onMounted, readonly, ref } from 'vue'

const ACTIVE_BAND = '-35% 0px -60% 0px'

const active = ref('')
let observer: IntersectionObserver | null = null
let consumers = 0

function observe() {
  if (typeof IntersectionObserver === 'undefined') return

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = (entry.target as HTMLElement).id
        else if (active.value === (entry.target as HTMLElement).id) active.value = ''
      }
    },
    { rootMargin: ACTIVE_BAND, threshold: 0 }
  )

  document.querySelectorAll<HTMLElement>('main section[id]').forEach((section) => {
    observer?.observe(section)
  })
}

export function useActiveSection() {
  onMounted(() => {
    if (consumers === 0) observe()
    consumers += 1
  })

  onBeforeUnmount(() => {
    consumers -= 1
    if (consumers === 0) {
      observer?.disconnect()
      observer = null
    }
  })

  return { active: readonly(active) }
}
