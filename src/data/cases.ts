import pilpoilShot from '@/assets/cases/pilpoil.webp'
import type { Lang } from '@/utils/highlight'

export type CaseFigure =
  | { file: string; kind: 'code'; lang: Lang; source: string }
  | { height: number; kind: 'image'; src: string; width: number }
  | { kind: 'board'; rows: string[] }

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
      lang: 'ts',
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
    figure: {
      file: 'adventure.ink',
      kind: 'code',
      lang: 'ink',
      source: `=== fight_goblin ===
# combat: goblin_scout
# flee_to: bypass_goblin
# victory_path: goblin_defeated
-> END

=== goblin_defeated ===
La créature s'effondre dans un râle sec. Dans son sac :
un quignon de pain moisi, trois cailloux peints, et une
fiole de verre épais qui sent l'herbe et la résine.

# add_item: healing_potion

* [Continuer dans la forêt] -> forest_clearing`
    },
    slug: 'wizard-tomb'
  },
  {
    figure: { height: 1092, kind: 'image', src: pilpoilShot, width: 560 },
    site: 'https://pilpoil.app',
    slug: 'pilpoil'
  },
  {
    figure: {
      kind: 'board',
      rows: [
        '#########',
        '#P.x...E#',
        '#.#x#.#.#',
        '#x.*xx..#',
        '#.#*#.#x#',
        '#**B**x.#',
        '#.#*#.#.#',
        '#..*x...#',
        '#########'
      ]
    },
    slug: 'bomberman'
  }
]
