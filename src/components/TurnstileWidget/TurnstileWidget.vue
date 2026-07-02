<template>
  <div ref="container" class="turnstile" />
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA'
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

const emit = defineEmits<{
  'update:modelValue': [token: string]
}>()

const container = ref<HTMLElement | null>(null)
let widgetId: string | null = null
let pendingExecute = false

function loadScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve()

  const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`)
  if (existing) {
    return new Promise((resolve) =>
      existing.addEventListener('load', () => resolve(), { once: true })
    )
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    script.addEventListener('load', () => resolve(), { once: true })
    script.addEventListener('error', () => reject(new Error('Turnstile failed to load')), {
      once: true
    })
    document.head.appendChild(script)
  })
}

function render() {
  if (!window.turnstile || !container.value) return

  widgetId = window.turnstile.render(container.value, {
    sitekey: SITE_KEY,
    theme: 'auto',
    execution: 'execute',
    appearance: 'interaction-only',
    callback: (token) => emit('update:modelValue', token),
    'expired-callback': () => {
      emit('update:modelValue', '')
      if (widgetId) window.turnstile?.execute(widgetId)
    },
    'error-callback': () => emit('update:modelValue', '')
  })

  if (pendingExecute) {
    pendingExecute = false
    window.turnstile.execute(widgetId)
  }
}

let loadingScript = false

async function ensureReady() {
  if (widgetId || loadingScript) return
  loadingScript = true
  try {
    await loadScript()
    render()
  } catch {
    // Script blocked (network / privacy extension). The token stays empty and
    // the server verification fails closed — submission is simply refused.
  } finally {
    loadingScript = false
  }
}

function execute() {
  if (window.turnstile && widgetId) {
    window.turnstile.execute(widgetId)
  } else {
    pendingExecute = true
    void ensureReady()
  }
}

function reset() {
  if (window.turnstile && widgetId) {
    window.turnstile.reset(widgetId)
    emit('update:modelValue', '')
  }
}

onBeforeUnmount(() => {
  if (window.turnstile && widgetId) window.turnstile.remove(widgetId)
})

defineExpose({ execute, reset })
</script>

<style lang="scss" scoped>
.turnstile:not(:empty) {
  margin-top: 0.75rem;
}
</style>
