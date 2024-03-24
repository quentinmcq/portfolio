<template>
  <v-app>
    <v-main class="app">
      <TheNavbar />
      <TheHeader />

      <v-container :style="appStyle">
        <HomePage />
      </v-container>

      <TheFooter />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useGoogleAnalyticsEvent } from '@/composables/event/google-analytics';
import { useResponsive } from '@/composables/style/responsive';
import TheNavbar from '@/components/TheNavbar/TheNavbar.vue';
import TheHeader from '@/components/TheHeader/TheHeader.vue';
import TheFooter from '@/components/TheFooter/TheFooter.vue';
import HomePage from '@/pages/HomePage/HomePage.vue';
import { useRecaptchaProvider } from 'vue-recaptcha/head';

useRecaptchaProvider();

onMounted(() => sendEventOnFirstPageLoading());
const { appStyle } = useResponsive();

function sendEventOnFirstPageLoading(): void {
  useGoogleAnalyticsEvent({
    action: 'website-entry',
    category: 'website',
    label: 'A user has entered the site'
  });
}
</script>

<style lang="scss" src="./app.scss" />
