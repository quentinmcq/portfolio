import { EmailMessage } from 'cloudflare:email'

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> }
  SEND_EMAIL: { send: (message: EmailMessage) => Promise<void> }
}

interface ContactPayload {
  email?: string
  message?: string
  name?: string
}

const FROM_EMAIL = 'contact@quentin-macq.dev'
const TO_EMAIL = 'quentin.macq6@gmail.com'
const MIN_MESSAGE_LENGTH = 20
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function encodeSubject(subject: string): string {
  // RFC 2047 encoded-word so accents and special chars survive transit.
  const bytes = new TextEncoder().encode(subject)
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return `=?UTF-8?B?${btoa(binary)}?=`
}

function buildRawEmail(name: string, replyTo: string, body: string): string {
  return [
    `From: Portfolio <${FROM_EMAIL}>`,
    `To: ${TO_EMAIL}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${encodeSubject(`Portfolio · ${name}`)}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: 8bit',
    '',
    body,
  ].join('\r\n')
}

async function handleContact(request: Request, env: Env): Promise<Response> {
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

  if (!name || !EMAIL_RE.test(email) || message.length < MIN_MESSAGE_LENGTH) {
    return new Response('Validation failed', { status: 400 })
  }

  try {
    const raw = buildRawEmail(name, email, `${name} <${email}>\n\n${message}`)
    await env.SEND_EMAIL.send(new EmailMessage(FROM_EMAIL, TO_EMAIL, raw))
  }
  catch {
    return new Response('Email send failed', { status: 502 })
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  })
}

async function handleRequest(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url)

  if (url.pathname === '/api/contact') {
    return handleContact(request, env)
  }

  return env.ASSETS.fetch(request)
}

export default { fetch: handleRequest }
