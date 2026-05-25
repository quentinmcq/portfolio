<template>
  <header
    class="navbar"
    :class="{ 'is-scrolled': scrolled }"
    role="banner"
  >
    <div class="container navbar__inner">
      <a
        class="navbar__brand"
        href="#top"
        @click.prevent="scrollToTop"
        :aria-label="$t('common.back-to-top')"
      >
        <span class="navbar__brand-mark">Q.</span><span class="navbar__brand-name">Macq</span>
      </a>

      <div
        class="navbar__meta"
        aria-hidden="true"
      >
        <span class="navbar__edition">{{ $t('header.idx') }}</span>
        <span class="navbar__sep">·</span>
        <span class="navbar__edition">{{ $t('header.edition', { year: currentYear }) }}</span>
      </div>

      <nav
        class="navbar__links"
        aria-label="primary"
      >
        <a
          v-for="item in menu"
          :key="item.link"
          class="navbar__link"
          :href="item.link"
          @click.prevent="scrollToSection(item.link)"
        >
          <span class="navbar__link-idx">{{ item.index }}</span>
          <span class="navbar__link-label">{{ item.title }}</span>
        </a>
      </nav>

      <div class="navbar__actions">
        <TheLocaleSwitcher />
        <button
          class="navbar__icon-btn"
          type="button"
          :aria-label="$t('theme.toggle')"
          @click="toggleTheme"
        >
          <svg
            v-if="theme === 'dark'"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle
              cx="12"
              cy="12"
              r="4"
            />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <svg
            v-else
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
        <button
          class="navbar__menu-trigger"
          type="button"
          :aria-label="$t(drawer ? 'common.close-menu' : 'common.open-menu')"
          :aria-expanded="drawer"
          @click="toggleMenu"
        >
          <span class="navbar__menu-line" />
          <span class="navbar__menu-line" />
        </button>
      </div>
    </div>
  </header>

  <Transition name="drawer-fade">
    <div
      v-if="drawer"
      class="drawer-scrim"
      @click="toggleMenu"
      aria-hidden="true"
    />
  </Transition>

  <Transition name="drawer">
    <aside
      v-if="drawer"
      ref="drawerRef"
      class="drawer"
      tabindex="-1"
      @keydown="onDrawerKeydown"
    >
      <div class="drawer__header">
        <span class="drawer__eyebrow">{{ $t('header.idx') }} — {{ $t('header.edition', { year: currentYear }) }}</span>
        <button
          class="drawer__close"
          type="button"
          :aria-label="$t('common.close-menu')"
          @click="toggleMenu"
        >
          ×
        </button>
      </div>

      <nav
        class="drawer__nav"
        aria-label="primary mobile"
      >
        <a
          v-for="item in menu"
          :key="item.link"
          class="drawer__link"
          :href="item.link"
          @click.prevent="scrollToSection(item.link)"
        >
          <span class="drawer__link-idx">{{ item.index }}</span>
          <span class="drawer__link-label">{{ item.title }}</span>
        </a>
      </nav>

      <div class="drawer__resources">
        <a
          class="drawer__resource"
          href="/cv.pdf"
          target="_blank"
          rel="noopener"
        >
          <span>CV (PDF)</span>
          <svg
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
        <a
          class="drawer__resource"
          :href="linkedinUrl"
          target="_blank"
          rel="noopener"
        >
          <span>LinkedIn</span>
          <svg
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
        <a
          class="drawer__resource"
          :href="githubUrl"
          target="_blank"
          rel="noopener"
        >
          <span>GitHub</span>
          <svg
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
        <span class="drawer__caption">{{ $t('common.firstname') }} {{ $t('common.name-upper') }} — {{ $t('header.role') }}</span>
        <span class="drawer__caption drawer__caption--muted">{{ $t('header.meta-location') }}</span>
      </div>
    </aside>
  </Transition>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import TheLocaleSwitcher from '@/components/TheLocaleSwitcher/TheLocaleSwitcher.vue'
import { useTheme } from '@/composables/theme'
import { CONTACTS } from '@/data/contacts'

const { tm } = useI18n()
const { theme, toggleTheme } = useTheme()

const menu = computed(() => tm('menu') as Array<{ index: string, link: string, title: string }>)
const { github: githubUrl, linkedin: linkedinUrl } = CONTACTS

const currentYear = computed(() => new Date().getFullYear())
const drawer = ref(false)
const scrolled = ref(false)
const drawerRef = useTemplateRef<HTMLElement>('drawerRef')

function onScroll(): void {
  scrolled.value = window.scrollY > 60
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

function scrollToSection(anchor: string): void {
  const target = document.querySelector(anchor)
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  if (drawer.value) toggleMenu()
}

function scrollToTop(): void {
  window.scrollTo({ behavior: 'smooth', top: 0 })
}

function toggleMenu(): void {
  drawer.value = !drawer.value
  document.body.style.overflow = drawer.value ? 'hidden' : ''
}

// Focus the drawer when it opens so keyboard users land inside it.
watch(drawer, async (open) => {
  if (!open) return
  await nextTick()
  drawerRef.value?.focus()
})

// Trap Tab navigation inside the drawer + ESC closes it.
function onDrawerKeydown(e: KeyboardEvent): void {
  if (e.key === 'Escape') return toggleMenu()
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
  }
  else if (!e.shiftKey && active === last) {
    e.preventDefault()
    first.focus()
  }
}
</script>

<style lang="scss" src="./the-navbar.scss" scoped />
