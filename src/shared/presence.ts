// Shared between the Vue client (WebSocket URL) and the Cloudflare Worker
// (route matching + Durable Object upgrade). Keep both sides aligned.
export const PRESENCE_ENDPOINT = '/api/presence'

// Client keepalive cadence. The Durable Object auto-responds to these without
// waking from hibernation (see setWebSocketAutoResponse), so they cost nothing
// but keep intermediaries from dropping idle connections.
export const PRESENCE_PING = 'ping'
export const PRESENCE_PING_INTERVAL_MS = 30_000
