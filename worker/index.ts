import { PRESENCE_ENDPOINT } from '@/shared/presence'

import { PresenceCounter } from './presence'

export { PresenceCounter }

interface Env {
  ASSETS: Fetcher
  PRESENCE: DurableObjectNamespace<PresenceCounter>
}

export default {
  fetch(request, env) {
    if (new URL(request.url).pathname === PRESENCE_ENDPOINT) {
      if (request.headers.get('Upgrade') !== 'websocket') {
        return new Response('Expected WebSocket upgrade', { status: 426 })
      }

      return env.PRESENCE.getByName('global').fetch(request)
    }

    return env.ASSETS.fetch(request)
  }
} satisfies ExportedHandler<Env>
