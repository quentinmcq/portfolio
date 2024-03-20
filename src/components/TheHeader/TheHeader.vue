<template>
  <header class="header">
    <h1 class="header__full-name">
      {{ $t('common.firstname') }}
      <span class="header__name">{{ $t('common.name') }}</span>
    </h1>

    <VueWriter
      class="header__typed"
      :array="[
        $t('header.developer'),
        $t('header.visit')
      ]"
      :typeSpeed="80"
      :erase-speed="80"
      :intervals="100"
      :delay="1300"
    />
  </header>
</template>

<script setup lang="ts">
import VueWriter from 'vue-writer';
</script>

<style lang="scss" src="./the-header.scss" scoped />
