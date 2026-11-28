import { PRESENCE_ENDPOINT } from '@/shared/presence'

import { PresenceCounter } from './presence'

export { PresenceCounter }

interface Env {
  ASSETS: Fetcher
  PRESENCE: DurableObjectNamespace<PresenceCounter>
}

export default {
  fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === PRESENCE_ENDPOINT) {
      if (request.headers.get('Upgrade') !== 'websocket') {
        return new Response('Expected WebSocket upgrade', { status: 426 })
      }

      // Browsers always send Origin on a WebSocket handshake and scripts cannot forge it:
      // only pages of this site (or of the local `wrangler dev`) may join the counter.
      if (request.headers.get('Origin') !== url.origin) {
        return new Response('Forbidden origin', { status: 403 })
      }

      return env.PRESENCE.getByName('global').fetch(request)
    }

    return env.ASSETS.fetch(request)
  }
} satisfies ExportedHandler<Env>
