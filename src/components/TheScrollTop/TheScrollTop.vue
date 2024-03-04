<template>
  <a
    class="scroll-top"
    :class="{ 'scroll-top__transition': visible }"
    @click="scrollToTop"
  >
    <div class="scroll-top__icon">
      <v-icon color="#f4f4f4" :size="iconSize" icon="mdi-arrow-up" />
    </div>
  </a>
</template>

<script setup lang="ts">
import { useScroll } from '@/composables/event/scroll';
import { useResponsive } from '@/composables/style/responsive';

const { iconSize } = useResponsive();
const { visible, scrollToTop } = useScroll();
</script>

<style lang="scss" src="./the-scroll-top.scss" scoped />
