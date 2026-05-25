// Shared between the Vue client (validation rules, fetch endpoint) and the
// Cloudflare Worker (server-side enforcement, route matching). Keep both
// sides aligned.
export const CONTACT_ENDPOINT = '/api/contact'

export const MIN_MESSAGE_LENGTH = 40
export const MAX_MESSAGE_LENGTH = 5000
export const MAX_NAME_LENGTH = 100
export const MAX_EMAIL_LENGTH = 254
