<template>
  <v-parallax
    class="header"
    :src="path"
  >
    <div class="header__content">
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
        :type-speed="80"
        :erase-speed="80"
        :intervals="100"
        :delay="1300"
      />
    </div>
  </v-parallax>
</template>

<script setup lang="ts">
import VueWriter from '@/components/VueWriter/VueWriter.vue'
import { useImagePath } from '@/composables/common/image-path'

const { path } = useImagePath({
  directory: '',
  image: 'header.webp',
})
</script>

<style lang="scss" src="./the-header.scss" scoped />
