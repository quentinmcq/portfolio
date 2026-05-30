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
    callback: (token) => emit('update:modelValue', token),
    'expired-callback': () => emit('update:modelValue', ''),
    'error-callback': () => emit('update:modelValue', ''),
  })
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

defineExpose({ reset })
</script>

<style lang="scss" scoped>
.turnstile {
  min-height: 65px;
}
</style>
