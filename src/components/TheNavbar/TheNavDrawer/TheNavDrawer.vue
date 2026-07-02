<template>
  <Transition name="drawer-fade">
    <div v-if="open" class="drawer-scrim" aria-hidden="true" @click="close" />
  </Transition>

  <Transition name="drawer">
    <div
      v-if="open"
      ref="drawerRef"
      class="drawer"
      role="dialog"
      aria-modal="true"
      :aria-label="$t('common.aria-nav-mobile')"
      tabindex="-1"
      @keydown="onKeydown"
    >
      <div class="drawer__header">
        <span class="drawer__eyebrow"
          >{{ $t('header.idx') }} — {{ $t('header.edition', { year: currentYear }) }}</span
        >
        <button
          class="drawer__close"
          type="button"
          :aria-label="$t('common.close-menu')"
          @click="close"
        >
          ×
        </button>
      </div>

      <nav class="drawer__nav" :aria-label="$t('common.aria-nav-mobile')">
        <a
          v-for="item in menu"
          :key="item.link"
          class="drawer__link"
          :href="item.link"
          @click="close"
        >
          <span class="drawer__link-idx">{{ item.index }}</span>
          <span class="drawer__link-label">{{ item.title }}</span>
        </a>
      </nav>

      <div class="drawer__resources">
        <a class="drawer__resource" :href="linkedinUrl" target="_blank" rel="noopener">
          <span>LinkedIn</span>
          <svg
            aria-hidden="true"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
        <a class="drawer__resource" :href="githubUrl" target="_blank" rel="noopener">
          <span>GitHub</span>
          <svg
            aria-hidden="true"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
      </div>

      <div class="drawer__footer">
        <span class="drawer__caption"
          >{{ $t('common.firstname') }} {{ $t('common.name-upper') }} —
          {{ $t('header.role') }}</span
        >
        <span class="drawer__caption drawer__caption--muted">{{ $t('header.meta-location') }}</span>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { nextTick, useTemplateRef, watch } from 'vue'

interface MenuItem {
  index: string
  link: string
  title: string
}

const { open } = defineProps<{
  currentYear: number
  githubUrl: string
  linkedinUrl: string
  menu: MenuItem[]
  open: boolean
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const drawerRef = useTemplateRef<HTMLElement>('drawerRef')
let lastFocused: HTMLElement | null = null

function close() {
  emit('update:open', false)
}

// Move focus into the dialog on open; hand it back to the trigger on close.
// preventScroll: restoring focus must not fight an anchor scroll started by
// the very link click that closed the drawer.
watch(
  () => open,
  async (isOpen) => {
    if (isOpen) {
      lastFocused = document.activeElement as HTMLElement | null
      await nextTick()
      drawerRef.value?.focus()
    } else {
      lastFocused?.focus({ preventScroll: true })
      lastFocused = null
    }
  },
)

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') return close()
  if (e.key !== 'Tab' || !drawerRef.value) return

  const focusables = drawerRef.value.querySelectorAll<HTMLElement>(
    'a, button, [tabindex]:not([tabindex="-1"])',
  )
  if (!focusables.length) return

  const first = focusables[0]
  const last = focusables[focusables.length - 1]
  const active = document.activeElement

  if (e.shiftKey && active === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && active === last) {
    e.preventDefault()
    first.focus()
  }
}
</script>

<style lang="scss" src="./the-nav-drawer.scss" scoped />
