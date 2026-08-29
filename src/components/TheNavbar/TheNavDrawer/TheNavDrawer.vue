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
        <button
          class="drawer__close"
          type="button"
          :aria-label="$t('common.close-menu')"
          @click="close"
        >
          ×
        </button>
      </div>

      <nav class="drawer__nav">
        <a
          v-for="item in menu"
          :key="item.link"
          class="drawer__link"
          :href="item.link"
          @click="close"
        >
          <span class="drawer__link-label">{{ item.title }}</span>
        </a>
      </nav>

      <div class="drawer__resources">
        <a class="drawer__resource" :href="CONTACTS.linkedin" target="_blank" rel="noopener">
          <span>LinkedIn</span>
          <ArrowIcon :size="12" :stroke-width="1.6" />
        </a>
        <a class="drawer__resource" :href="CONTACTS.github" target="_blank" rel="noopener">
          <span>GitHub</span>
          <ArrowIcon :size="12" :stroke-width="1.6" />
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
import ArrowIcon from '@/components/ArrowIcon/ArrowIcon.vue'
import { nextTick, useTemplateRef, watch } from 'vue'

import type { MenuItem } from '@/types/MenuItem'

import { CONTACTS } from '@/data/contacts'

const { open } = defineProps<{
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
  }
)

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    return close()
  }

  if (e.key !== 'Tab' || !drawerRef.value) {
    return
  }

  const focusables = drawerRef.value.querySelectorAll<HTMLElement>(
    'a, button, [tabindex]:not([tabindex="-1"])'
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
