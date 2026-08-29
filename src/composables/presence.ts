import { onBeforeUnmount, onMounted, readonly, ref } from 'vue'

import {
  PRESENCE_ENDPOINT,
  PRESENCE_PING,
  PRESENCE_PING_INTERVAL_MS,
  PRESENCE_PONG
} from '@/shared/presence'

const MAX_BACKOFF_MS = 30_000
const DESKTOP_QUERY = '(min-width: 768px) and (hover: hover)'

export function usePresence() {
  const count = ref(0)
  const connected = ref(false)

  let socket: WebSocket | null = null
  let pingTimer: ReturnType<typeof setInterval> | null = null
  let reconnectTimer: ReturnType<typeof setTimeout> | null = null
  let attempts = 0
  let active = false
  let disposed = false
  let media: MediaQueryList | null = null

  function open() {
    if (!active || typeof WebSocket === 'undefined') {
      return
    }

    const proto = location.protocol === 'https:' ? 'wss' : 'ws'
    socket = new WebSocket(`${proto}://${location.host}${PRESENCE_ENDPOINT}`)

    socket.addEventListener('open', () => {
      connected.value = true
      attempts = 0
      pingTimer = setInterval(() => socket?.send(PRESENCE_PING), PRESENCE_PING_INTERVAL_MS)
    })

    socket.addEventListener('message', (event) => {
      if (event.data === PRESENCE_PONG) {
        return
      }

      const data = JSON.parse(event.data)

      if (typeof data.count === 'number') {
        count.value = data.count
      }
    })

    socket.addEventListener('close', () => {
      connected.value = false
      stopPing()

      if (!disposed && active) {
        scheduleReconnect()
      }
    })

    socket.addEventListener('error', () => socket?.close())
  }

  function scheduleReconnect() {
    const delay = Math.min(1000 * 2 ** attempts, MAX_BACKOFF_MS)

    attempts += 1
    reconnectTimer = setTimeout(open, delay)
  }

  function stopPing() {
    if (pingTimer) {
      clearInterval(pingTimer)
      pingTimer = null
    }
  }

  function teardown() {
    stopPing()

    if (reconnectTimer) {
      clearTimeout(reconnectTimer)
      reconnectTimer = null
    }

    const current = socket
    socket = null
    current?.close()
    connected.value = false
    count.value = 0
  }

  function onMediaChange(event: MediaQueryListEvent) {
    if (event.matches && !active) {
      active = true
      attempts = 0
      open()
    } else if (!event.matches && active) {
      active = false
      teardown()
    }
  }

  onMounted(() => {
    media = window.matchMedia(DESKTOP_QUERY)
    media.addEventListener('change', onMediaChange)

    if (media.matches) {
      active = true
      open()
    }
  })

  onBeforeUnmount(() => {
    disposed = true
    active = false
    media?.removeEventListener('change', onMediaChange)
    teardown()
  })

  return { count: readonly(count), connected: readonly(connected) }
}
