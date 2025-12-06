<template>
  <div class="header d-flex align-center justify-center position-relative overflow-hidden">
    <!-- Animated Mesh Gradient Background -->
    <div class="header__background">
      <div class="header__blob header__blob--1" />
      <div class="header__blob header__blob--2" />
      <div class="header__blob header__blob--3" />
    </div>

    <!-- Content -->
    <div class="header__content text-center z-index-1 pa-4">
      <h1 class="header__title mb-4">
        <span
          class="d-block text-white font-weight-black"
          style="font-size: clamp(3rem, 10vw, 8rem); line-height: 0.9;"
        >
          {{ $t('common.firstname').toUpperCase() }}
        </span>
        <span
          class="d-block text-gradient font-weight-black"
          style="font-size: clamp(3rem, 10vw, 8rem); line-height: 0.9;"
        >
          {{ $t('common.name').toUpperCase() }}
        </span>
      </h1>

      <div class="header__subtitle mt-8">
        <v-chip
          variant="outlined"
          color="primary"
          class="mr-3 glass-chip"
          size="large"
        >
          UX/UI Designer
        </v-chip>
        <v-chip
          variant="outlined"
          color="white"
          class="glass-chip"
          size="large"
        >
          Full-Stack Dev
        </v-chip>
      </div>

      <div class="header__scroll-indicator position-absolute bottom-0 mb-8 w-100 text-center">
        <v-icon
          icon="mdi-arrow-down"
          color="white"
          class="animate-bounce"
          size="large"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const name = 'TheHeader'
</script>

<style lang="scss" src="./the-header.scss" scoped />
