<template>
  <button
    class="scroll-top"
    :class="{ 'is-visible': visible && !hidden }"
    :aria-label="$t('common.back-to-top')"
    :title="$t('common.back-to-top')"
    type="button"
    @click="scrollToTop"
  >
    <svg
      aria-hidden="true"
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
  </button>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import { useScrollHide } from '@/composables/scroll-hide'
import { useWindowScroll } from '@/composables/window-scroll'

const { y } = useWindowScroll()
const { hidden } = useScrollHide()
const visible = ref(false)

watch(y, (value) => {
  visible.value = value > window.innerHeight * 0.8
})

function scrollToTop() {
  window.scrollTo({ top: 0 })
}
</script>

<style lang="scss" src="./the-scroll-top.scss" scoped />
