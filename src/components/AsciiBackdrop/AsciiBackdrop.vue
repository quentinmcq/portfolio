<template>
  <canvas ref="canvas" class="ascii-backdrop" aria-hidden="true" />
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'

import { useAsciiBackdrop } from '@/composables/use-ascii-backdrop'

const canvas = useTemplateRef<HTMLCanvasElement>('canvas')

useAsciiBackdrop(canvas)
</script>

<style lang="scss" src="./ascii-backdrop.scss" scoped />
