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
import { useResponsive } from '@/composables/responsive';
import Navbar from './components/Navbar/Navbar.vue';
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import Home from './pages/Home/Home.vue';

const { appStyle } = useResponsive();
</script>

<style lang="scss" src="./app.scss" />
