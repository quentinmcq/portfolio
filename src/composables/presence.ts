import { onBeforeUnmount, onMounted, readonly, ref } from 'vue'

import { PRESENCE_ENDPOINT, PRESENCE_PING, PRESENCE_PING_INTERVAL_MS } from '@/shared/presence'

const MAX_BACKOFF_MS = 30_000

// Connects to the presence Durable Object and exposes the live connected count.
// Reconnects with exponential backoff and keeps the socket alive with periodic
// pings. Stays silent (count 0, connected false) if WebSockets are unavailable
// or the worker isn't reachable (e.g. pure `vite` dev without `wrangler dev`).
export function usePresence() {
  const count = ref(0)
  const connected = ref(false)

  let socket: WebSocket | null = null
  let pingTimer: ReturnType<typeof setInterval> | null = null
  let reconnectTimer: ReturnType<typeof setTimeout> | null = null
  let attempts = 0
  let disposed = false

  function open() {
    if (typeof WebSocket === 'undefined') return

    const proto = location.protocol === 'https:' ? 'wss' : 'ws'
    socket = new WebSocket(`${proto}://${location.host}${PRESENCE_ENDPOINT}`)

    socket.addEventListener('open', () => {
      connected.value = true
      attempts = 0
      pingTimer = setInterval(() => socket?.send(PRESENCE_PING), PRESENCE_PING_INTERVAL_MS)
    })

    socket.addEventListener('message', (event) => {
      try {
        const data = JSON.parse(event.data)
        if (typeof data.count === 'number') count.value = data.count
      }
      catch {
        // non-JSON frame (e.g. pong) — ignore
      }
    })

    socket.addEventListener('close', () => {
      connected.value = false
      stopPing()
      if (!disposed) scheduleReconnect()
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

  onMounted(open)

  onBeforeUnmount(() => {
    disposed = true
    stopPing()
    if (reconnectTimer) clearTimeout(reconnectTimer)
    socket?.close()
  })

  return { count: readonly(count), connected: readonly(connected) }
}
