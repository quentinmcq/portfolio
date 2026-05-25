interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> }
  CONTACT_TO_EMAIL: string
  RESEND_API_KEY: string
}

interface ContactPayload {
  email?: string
  message?: string
  name?: string
}

const RESEND_ENDPOINT = 'https://api.resend.com/emails'
const FROM_EMAIL = 'Portfolio <onboarding@resend.dev>'
const MIN_MESSAGE_LENGTH = 20
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
    return new Response('Server misconfigured', { status: 500 })
  }

  const resendResponse = await fetch(RESEND_ENDPOINT, {
    body: JSON.stringify({
      from: FROM_EMAIL,
      reply_to: email,
      subject: `Portfolio · ${name}`,
      text: `${name} <${email}>\n\n${message}`,
      to: [env.CONTACT_TO_EMAIL],
    }),
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  if (!resendResponse.ok) {
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
