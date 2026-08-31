import bombermanShot from '@/assets/cases/bomberman.png'
import pilpoilShot from '@/assets/cases/pilpoil.webp'
import wizardTombShot from '@/assets/cases/wizard-tomb.webp'

export type CaseFigure =
  | { file: string; kind: 'code'; source: string }
  | { frame: 'phone' | 'plain'; height: number; kind: 'image'; src: string; width: number }

export interface ProjectCase {
  figure: CaseFigure
  site?: string
  slug: string
}

export const CASES: ProjectCase[] = [
  {
    figure: {
      file: 'worker/presence.ts',
      kind: 'code',
      source: `export class PresenceCounter extends DurableObject {
  override fetch(): Response {
    const [client, server] = Object.values(new WebSocketPair())

    this.ctx.acceptWebSocket(server)
    this.broadcast()

    return new Response(null, { status: 101, webSocket: client })
  }

  private broadcast(leaving?: WebSocket): void {
    const open = this.ctx
      .getWebSockets()
      .filter((ws) => ws !== leaving && ws.readyState === WS_OPEN)

    const payload = JSON.stringify({ count: open.length })

    for (const ws of open) {
      ws.send(payload)
    }
  }
}`
    },
    slug: 'portfolio'
  },
  {
    figure: { frame: 'phone', height: 1826, kind: 'image', src: wizardTombShot, width: 840 },
    slug: 'wizard-tomb'
  },
  {
    figure: { frame: 'phone', height: 1637, kind: 'image', src: pilpoilShot, width: 840 },
    site: 'https://pilpoil.app',
    slug: 'pilpoil'
  },
  {
    figure: { frame: 'plain', height: 820, kind: 'image', src: bombermanShot, width: 1200 },
    slug: 'bomberman'
  }
]
