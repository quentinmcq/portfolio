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
            aria-hidden="true"
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
            aria-hidden="true"
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

  <TheNavDrawer
    v-model:open="drawer"
    :menu
    :current-year
    :linkedin-url="linkedinUrl"
    :github-url="githubUrl"
    @navigate="scrollToSection"
  />
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import TheLocaleSwitcher from '@/components/TheLocaleSwitcher/TheLocaleSwitcher.vue'
import { useTheme } from '@/composables/theme'
import { CONTACTS } from '@/data/contacts'

import TheNavDrawer from './TheNavDrawer/TheNavDrawer.vue'

const { tm } = useI18n()
const { theme, toggleTheme } = useTheme()

const menu = computed(() => tm('menu') as Array<{ index: string, link: string, title: string }>)
const { github: githubUrl, linkedin: linkedinUrl } = CONTACTS

const currentYear = computed(() => new Date().getFullYear())
const drawer = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

function scrollToSection(anchor: string) {
  const target = document.querySelector(anchor)
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  if (drawer.value) drawer.value = false
}

function scrollToTop() {
  window.scrollTo({ behavior: 'smooth', top: 0 })
}

function toggleMenu() {
  drawer.value = !drawer.value
}

// Lock body scroll when drawer is open
watch(drawer, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<style lang="scss" src="./the-navbar.scss" scoped />
