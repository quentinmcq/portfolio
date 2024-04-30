<template>
  <v-toolbar
    :class="{ navbar__transition: visible }"
    class="navbar"
    color="#273142"
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

    <v-app-bar-nav-icon
      class="navbar__nav-icon"
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
        v-for="(item, index) in menu"
        :key="index"
      >
        <a
          class="navbar__link"
          @click="scrollToSection(item.link)"
        >
          {{ $t(`menu[${index}].title`) }}
        </a>
      </li>
    </ul>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import TheLocaleSwitcher from '@/components/TheLocaleSwitcher/TheLocaleSwitcher.vue'
import { useGoogleAnalyticsEvent } from '@/composables/event/google-analytics'
import { useScroll } from '@/composables/event/scroll'
import { useResponsive } from '@/composables/style/responsive'
import menu from '@/data/fr/menu'
import { ref } from 'vue'

const { scrollToTop, visible } = useScroll()
const { menuWidth } = useResponsive()
const fullName = ['Quentin', 'Macq']

const drawer = ref(false)
function toggleMenu(): void {
  drawer.value = !drawer.value
}

function scrollToSection(anchor: string): void {
  const link = document.querySelector(anchor)

  if (!link) return

  link.scrollIntoView({ behavior: 'smooth' })

  toggleMenu()
}

function manageEvents(): void {
  toggleMenu()
  sendMenuClickAnalyticsEvent()
}

function sendMenuClickAnalyticsEvent(): void {
  useGoogleAnalyticsEvent({
    action: `timeline-card:click`,
    category: 'Menu',
    label: 'Menu',
  })
}
</script>

<style lang="scss" src="./the-navbar.scss" scoped />
