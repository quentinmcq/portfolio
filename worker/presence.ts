import { DurableObject } from 'cloudflare:workers'

import { PRESENCE_PING } from '@/shared/presence'

// Single global instance (getByName('global')) tracking every open tab on the
// site. The connected count is derived live from ctx.getWebSockets(), which
// survives hibernation — so there is no state to persist and nothing to rebuild
// on wake. The closing socket is excluded explicitly to avoid an off-by-one
// during webSocketClose.
const WS_OPEN = 1 // WebSocket.READY_STATE_OPEN

export class PresenceCounter extends DurableObject {
  constructor(ctx: DurableObjectState, env: unknown) {
    super(ctx, env as never)
    // Pongs are sent by the runtime without waking the DO from hibernation.
    this.ctx.setWebSocketAutoResponse(
      new WebSocketRequestResponsePair(PRESENCE_PING, 'pong'),
    )
  }

  override async fetch(): Promise<Response> {
    const pair = new WebSocketPair()
    const [client, server] = Object.values(pair)

    this.ctx.acceptWebSocket(server)
    this.broadcast()

    return new Response(null, { status: 101, webSocket: client })
  }

  override webSocketMessage(): void {
    // Keepalive pings handled by auto-response; real messages are ignored.
  }

  override webSocketClose(ws: WebSocket, code: number, reason: string): void {
    try {
      ws.close(code, reason)
    }
    catch {
      // already closing
    }
    this.broadcast(ws)
  }

  override webSocketError(ws: WebSocket): void {
    this.broadcast(ws)
  }

  private broadcast(exclude?: WebSocket): void {
    const sockets = this.ctx
      .getWebSockets()
      .filter((ws) => ws !== exclude && ws.readyState === WS_OPEN)

    const payload = JSON.stringify({ count: sockets.length })

    for (const ws of sockets) {
      try {
        ws.send(payload)
      }
      catch {
        // socket went away mid-broadcast; the close handler will reconcile
      }
    }
  }
}
