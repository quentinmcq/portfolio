import { DurableObject } from 'cloudflare:workers'

import { PRESENCE_PING, PRESENCE_PONG } from '@/shared/presence'

const WS_OPEN = 1
const MAX_SOCKETS = 100
const BROADCAST_DELAY_MS = 1_000
const POLICY_VIOLATION = 1008

export class PresenceCounter extends DurableObject<unknown> {
  private broadcastTimer: ReturnType<typeof setTimeout> | null = null

  constructor(ctx: DurableObjectState, env: unknown) {
    super(ctx, env)
    ctx.setWebSocketAutoResponse(new WebSocketRequestResponsePair(PRESENCE_PING, PRESENCE_PONG))
  }

  override fetch(): Response {
    if (this.openSockets().length >= MAX_SOCKETS) {
      return new Response('Too many visitors', { headers: { 'Retry-After': '60' }, status: 503 })
    }

    const [client, server] = Object.values(new WebSocketPair())

    this.ctx.acceptWebSocket(server)
    this.send(server, this.openSockets().length)
    this.scheduleBroadcast()

    return new Response(null, { status: 101, webSocket: client })
  }

  // Pings are answered without waking the object; anything else is not part of the protocol.
  override webSocketMessage(ws: WebSocket): void {
    this.close(ws, POLICY_VIOLATION, 'Unexpected message')
    this.scheduleBroadcast()
  }

  override webSocketClose(ws: WebSocket, code: number, reason: string): void {
    this.close(ws, code, reason)
    this.scheduleBroadcast()
  }

  override webSocketError(ws: WebSocket): void {
    this.close(ws)
    this.scheduleBroadcast()
  }

  private openSockets(): WebSocket[] {
    return this.ctx.getWebSockets().filter((ws) => ws.readyState === WS_OPEN)
  }

  // Arrivals and departures within a second share one broadcast, so a burst of connections
  // costs one message per visitor instead of one per visitor and per connection.
  private scheduleBroadcast(): void {
    if (this.broadcastTimer) {
      return
    }

    this.broadcastTimer = setTimeout(() => {
      this.broadcastTimer = null

      const open = this.openSockets()

      for (const ws of open) {
        this.send(ws, open.length)
      }
    }, BROADCAST_DELAY_MS)
  }

  private send(ws: WebSocket, count: number): void {
    try {
      ws.send(JSON.stringify({ count }))
    } catch {}
  }

  private close(ws: WebSocket, code?: number, reason?: string): void {
    try {
      ws.close(code, reason)
    } catch {}
  }
}
