<template>
  <v-app>
    <v-main class="app">
      <navbar />
      <header-main />

      <v-container :style="appStyle">
        <home />
      </v-container>

      <footer-main />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useGoogleAnalyticsEvent } from '@/composables/event/google-analytics';
import { useResponsive } from '@/composables/style/responsive';
import Navbar from './components/Navbar/Navbar.vue';
import HeaderMain from './components/Header/Header.vue';
import FooterMain from './components/Footer/Footer.vue';
import Home from './pages/Home/Home.vue';

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
