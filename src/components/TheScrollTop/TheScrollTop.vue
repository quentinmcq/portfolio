<template>
  <button
    class="scroll-top"
    :class="{ 'is-visible': visible }"
    :aria-label="$t('common.back-to-top')"
    type="button"
    @click="scrollToTop"
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
    <span class="scroll-top__label">{{ $t('common.back-to-top') }}</span>
  </button>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const visible = ref(false)

function onScroll(): void {
  visible.value = window.scrollY > window.innerHeight * 0.8
}

function scrollToTop(): void {
  window.scrollTo({ behavior: 'smooth', top: 0 })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss" src="./the-scroll-top.scss" scoped />
