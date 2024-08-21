<template>
  <v-app>
    <v-main>
      <RotateDevice />

      <div class="app">
        <TheNavbar />
        <TheHeader />

        <v-container :style="appStyle">
          <HomePage />
        </v-container>

        <TheFooter />
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import RotateDevice from '@/components/RotateDevice/RotateDevice.vue'
import TheFooter from '@/components/TheFooter/TheFooter.vue'
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import TheNavbar from '@/components/TheNavbar/TheNavbar.vue'
import { useGoogleAnalyticsEvent } from '@/composables/event/google-analytics'
import { useResponsive } from '@/composables/style/responsive'
import HomePage from '@/pages/HomePage/HomePage.vue'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRecaptchaProvider } from 'vue-recaptcha/head'

useRecaptchaProvider()

onMounted(() => sendEventOnFirstPageLoading())
const { appStyle } = useResponsive()

function sendEventOnFirstPageLoading(): void {
  useGoogleAnalyticsEvent({
    action: 'website-entry',
    category: 'website',
    label: 'A user has entered the site',
  })
}

let isLandscape = ref(window.screen.orientation === 'landscape')
watch(isLandscape, (newVal, oldVal) => {
  console.log(`Orientation changed: was ${oldVal ? 'Landscape' : 'Portrait'}, now ${newVal ? 'Landscape' : 'Portrait'}`)
  // Vous pouvez exécuter d'autres actions ici si nécessaire
})
</script>

<style lang="scss" src="./app.scss" />
