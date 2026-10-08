<template>
  <canvas ref="canvas" class="ascii-backdrop" aria-hidden="true" />
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'

import { useAsciiBackdrop } from '@/composables/use-ascii-backdrop'

const props = defineProps<{ moon?: boolean }>()

const canvas = useTemplateRef<HTMLCanvasElement>('canvas')

useAsciiBackdrop(canvas, () => props.moon ?? false)
</script>

<style lang="scss" src="./ascii-backdrop.scss" scoped />
