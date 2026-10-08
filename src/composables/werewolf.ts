import { onBeforeUnmount, onMounted, readonly, ref } from 'vue'

const HOWL = 'awoo'
const HOWL_MS = 1800
const OCTOBER = 9

export function isHalloweenWeek(date: Date) {
  return date.getMonth() === OCTOBER && date.getDate() >= 24
}

export function useWerewolf() {
  const fullMoon = ref(false)
  const howling = ref(false)
  let typed = ''
  let timer = 0

  function onKeydown(e: KeyboardEvent) {
    if (e.key.length !== 1 || e.metaKey || e.ctrlKey || e.altKey) return
    typed = (typed + e.key.toLowerCase()).slice(-HOWL.length)
    if (typed !== HOWL) return
    typed = ''
    howling.value = false
    window.clearTimeout(timer)
    requestAnimationFrame(() => {
      howling.value = true
      timer = window.setTimeout(() => (howling.value = false), HOWL_MS)
    })
  }

  onMounted(() => {
    fullMoon.value = isHalloweenWeek(new Date())
    window.addEventListener('keydown', onKeydown)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
    window.clearTimeout(timer)
  })

  return { fullMoon: readonly(fullMoon), howling: readonly(howling) }
}
