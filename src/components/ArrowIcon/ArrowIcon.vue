<template>
  <svg
    aria-hidden="true"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
</template>

<script setup lang="ts">
const { size, strokeWidth = 1.5 } = defineProps<{
  size?: number
  strokeWidth?: number
}>()
</script>
