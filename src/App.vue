<template>
  <v-app>
    <v-main class="app">
      <Navbar />
      <Header />

      <v-container :style="appStyle">
        <Home />
      </v-container>

      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue';
import { useGoogleAnalyticsEvent } from '@/composables/google-analytics';
import { useResponsive } from '@/composables/responsive';
import Navbar from './components/Navbar/Navbar.vue';
import Header from './pages/Header/Header.vue';
import Footer from './pages/Footer/Footer.vue';
import Home from './pages/Home/Home.vue';

onMounted(() => sendEventOnFirstPageLoading());
const { appStyle } = useResponsive();

function sendEventOnFirstPageLoading() {
  useGoogleAnalyticsEvent({
    action: 'website-entry',
    event_category: 'website',
    event_label: 'A user has entered the site'
  });
}
</script>

<style lang="scss" src="./app.scss" />
