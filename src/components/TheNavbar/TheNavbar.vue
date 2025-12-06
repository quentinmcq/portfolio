<template>
  <v-toolbar
    :class="{ navbar__transition: visible }"
    class="navbar pr-4"
    elevation="0"
  >
    <v-toolbar-title>
      <span
        v-for="item in fullName"
        :key="item"
        class="navbar__full-name"
        @click="scrollToTop"
      >
        <span class="navbar__first-letter">{{ item.substring(0, 1) }}</span>
        <span>{{ item.substring(1) }}</span>
      </span>
    </v-toolbar-title>

    <TheLocaleSwitcher />

    <v-spacer />

    <div class="navbar__desktop-menu d-none d-md-flex align-center">
      <a
        v-for="(item, index) in $tm('menu')"
        :key="index"
        class="navbar__link-desktop ml-6"
        @click="scrollToSection(item.link)"
      >
        {{ item.title }}
      </a>
    </div>

    <v-app-bar-nav-icon
      class="navbar__nav-icon d-md-none"
      @click="toggleMenu"
      aria-label="bouton de menu"
    />
  </v-toolbar>

  <v-navigation-drawer
    v-model="drawer"
    :style="{ width: drawer ? menuWidth : 0 }"
    color="#333333"
    location="right"
    temporary
  >
    <v-icon
      class="cross-icon"
      color="white"
      icon="mdi-close"
      size="50"
      @click="manageEvents()"
    />

    <ul class="navbar__link-list">
      <li
        v-for="(item, index) in $tm('menu')"
        :key="index"
      >
        <a
          class="navbar__link"
          @click="scrollToSection(item.link)"
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import TheLocaleSwitcher from '@/components/TheLocaleSwitcher/TheLocaleSwitcher.vue'
import { useGoogleAnalyticsEvent } from '@/composables/event/google-analytics'
import { useScroll } from '@/composables/event/scroll'
import { useResponsive } from '@/composables/style/responsive'

const { scrollToTop, visible } = useScroll()
const { menuWidth } = useResponsive()
const fullName: [x: string, y: string] = ['Quentin', 'Macq']

const drawer = ref(false)
function manageEvents(): void {
  toggleMenu()
  sendMenuClickAnalyticsEvent()
}

function scrollToSection(anchor: string): void {
  const link = document.querySelector(anchor)

  if (!link) return

  link.scrollIntoView({ behavior: 'smooth' })

  // Only toggle if we are on mobile (drawer is active) or handle via display check
  // Best check: if drawer is true, close it.
  if (drawer.value) {
    toggleMenu()
  }
}

function sendMenuClickAnalyticsEvent(): void {
  useGoogleAnalyticsEvent({
    action: `timeline-card:click`,
    category: 'Menu',
    label: 'Menu',
  })
}

function toggleMenu(): void {
  drawer.value = !drawer.value
}
</script>

<style lang="scss" src="./the-navbar.scss" scoped />
