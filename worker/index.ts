import { EmailMessage } from 'cloudflare:email'

import {
  CONTACT_ENDPOINT,
  MAX_EMAIL_LENGTH,
  MAX_MESSAGE_LENGTH,
  MAX_NAME_LENGTH,
  MIN_MESSAGE_LENGTH,
} from '@/shared/contact'
import { PRESENCE_ENDPOINT } from '@/shared/presence'

import { PresenceCounter } from './presence'

export { PresenceCounter }

interface Env {
  ASSETS: Fetcher
  SEND_EMAIL: SendEmail
  PRESENCE: DurableObjectNamespace<PresenceCounter>
  TURNSTILE_SECRET: string
  CONTACT_TO_EMAIL: string
}

interface ContactPayload {
  email?: string
  message?: string
  name?: string
  turnstileToken?: string
}

const FROM_EMAIL = 'contact@quentin-macq.dev'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function encodeSubject(subject: string) {
  // RFC 2047 encoded-word so accents and special chars survive transit.
  const bytes = new TextEncoder().encode(subject)
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return `=?UTF-8?B?${btoa(binary)}?=`
}

function buildRawEmail(name: string, replyTo: string, to: string, body: string) {
  return [
    `From: Portfolio <${FROM_EMAIL}>`,
    `To: ${to}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${encodeSubject(`Portfolio · ${name}`)}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: 8bit',
    '',
    body,
  ].join('\r\n')
}

async function verifyTurnstile(token: string, ip: string, secret: string): Promise<boolean> {
  const body = new FormData()
  body.append('secret', secret)
  body.append('response', token)
  if (ip) body.append('remoteip', ip)

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      body,
      method: 'POST',
    })
    const data = await res.json() as { success?: boolean }
    return data.success === true
  }
  catch {
    return false
  }
}

async function handleContact(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  let payload: ContactPayload
  try {
    payload = await request.json() as ContactPayload
  }
  catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  const name = payload.name?.trim() ?? ''
  const email = payload.email?.trim() ?? ''
  const message = payload.message?.trim() ?? ''
  const token = payload.turnstileToken?.trim() ?? ''

  if (
    !name
    || name.length > MAX_NAME_LENGTH
    || !EMAIL_RE.test(email)
    || email.length > MAX_EMAIL_LENGTH
    || message.length < MIN_MESSAGE_LENGTH
    || message.length > MAX_MESSAGE_LENGTH
  ) {
    return new Response('Validation failed', { status: 400 })
  }

  const ip = request.headers.get('CF-Connecting-IP') ?? ''
  if (!token || !await verifyTurnstile(token, ip, env.TURNSTILE_SECRET)) {
    return new Response('Captcha verification failed', { status: 403 })
  }

  // Relay in the background: validation + captcha already passed synchronously,
  // and a 200 here only ever meant "accepted" (never "delivered to inbox"), so
  // don't block the client on the multi-second send.
  const to = env.CONTACT_TO_EMAIL
  const raw = buildRawEmail(name, email, to, `${name} <${email}>\n\n${message}`)
  ctx.waitUntil(
    env.SEND_EMAIL.send(new EmailMessage(FROM_EMAIL, to, raw)).catch((error) => {
      console.error('Contact email send failed', error)
    }),
  )

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  })
}

function handlePresence(request: Request, env: Env): Promise<Response> | Response {
  if (request.headers.get('Upgrade') !== 'websocket') {
    return new Response('Expected WebSocket upgrade', { status: 426 })
  }
  return env.PRESENCE.getByName('global').fetch(request)
}

async function handleRequest(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  const url = new URL(request.url)

  if (url.pathname === CONTACT_ENDPOINT) {
    return handleContact(request, env, ctx)
  }

  if (url.pathname === PRESENCE_ENDPOINT) {
    return handlePresence(request, env)
  }

  return env.ASSETS.fetch(request)
}

export default { fetch: handleRequest }
