import { DurableObject } from 'cloudflare:workers'

import { PRESENCE_PING } from '@/shared/presence'

const WS_OPEN = 1

export class PresenceCounter extends DurableObject<unknown> {
  constructor(ctx: DurableObjectState, env: unknown) {
    super(ctx, env)
    ctx.setWebSocketAutoResponse(new WebSocketRequestResponsePair(PRESENCE_PING, 'pong'))
  }

  override fetch(): Response {
    const [client, server] = Object.values(new WebSocketPair())

    this.ctx.acceptWebSocket(server)
    this.broadcast()

    return new Response(null, { status: 101, webSocket: client })
  }

  override webSocketMessage(): void {}

  override webSocketClose(ws: WebSocket, code: number, reason: string): void {
    try {
      ws.close(code, reason)
    } catch {
      // already closing
    }
    this.broadcast(ws)
  }

  override webSocketError(ws: WebSocket): void {
    this.broadcast(ws)
  }

  private broadcast(leaving?: WebSocket): void {
    const open = this.ctx
      .getWebSockets()
      .filter((ws) => ws !== leaving && ws.readyState === WS_OPEN)

    const payload = JSON.stringify({ count: open.length })

    for (const ws of open) {
      try {
        ws.send(payload)
      } catch {
        // went away mid-broadcast; its close handler reconciles the count
      }
    }
  }
}
