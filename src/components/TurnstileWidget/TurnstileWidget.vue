<template>
  <div
    ref="container"
    class="turnstile"
  />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

// Public site key — safe to ship. Falls back to Cloudflare's "always passes"
// test key so the form works in dev without any config. Set the real key via
// VITE_TURNSTILE_SITE_KEY for production builds.
const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA'
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

const emit = defineEmits<{
  'update:modelValue': [token: string]
}>()

const container = ref<HTMLElement | null>(null)
let widgetId: string | null = null
// Set if execute() is called before the widget finished rendering — the
// challenge is then kicked off as soon as render completes.
let pendingExecute = false

function loadScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve()

  const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`)
  if (existing) {
    return new Promise((resolve) => existing.addEventListener('load', () => resolve(), { once: true }))
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    script.addEventListener('load', () => resolve(), { once: true })
    script.addEventListener('error', () => reject(new Error('Turnstile failed to load')), { once: true })
    document.head.appendChild(script)
  })
}

function render() {
  if (!window.turnstile || !container.value) return

  widgetId = window.turnstile.render(container.value, {
    sitekey: SITE_KEY,
    theme: 'auto',
    // Stay idle until the form is engaged; only show UI if a challenge needs it.
    execution: 'execute',
    appearance: 'interaction-only',
    callback: (token) => emit('update:modelValue', token),
    // Token expired (~5 min) while the form is open — refresh it in place so the
    // submit button doesn't silently lock up.
    'expired-callback': () => {
      emit('update:modelValue', '')
      if (widgetId) window.turnstile?.execute(widgetId)
    },
    'error-callback': () => emit('update:modelValue', ''),
  })

  if (pendingExecute) {
    pendingExecute = false
    window.turnstile.execute(widgetId)
  }
}

// Kick off the challenge on demand (called when the user engages the form).
function execute() {
  if (window.turnstile && widgetId) window.turnstile.execute(widgetId)
  else pendingExecute = true
}

function reset() {
  if (window.turnstile && widgetId) {
    window.turnstile.reset(widgetId)
    emit('update:modelValue', '')
  }
}

onMounted(async () => {
  try {
    await loadScript()
    render()
  }
  catch {
    // Script blocked (network / privacy extension). The token stays empty and
    // the server verification fails closed — submission is simply refused.
  }
})

onBeforeUnmount(() => {
  if (window.turnstile && widgetId) window.turnstile.remove(widgetId)
})

defineExpose({ execute, reset })
</script>

<style lang="scss" scoped>
// interaction-only: the widget is empty unless an interactive challenge shows,
// so only reserve space when it actually has content.
.turnstile:not(:empty) {
  margin-top: 0.75rem;
}
</style>
