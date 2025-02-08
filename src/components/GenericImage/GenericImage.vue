<template>
  <v-img
    :src
    :lazy-src
    :cover
    :width
    :height
    :alt
  >
    <template #placeholder>
      <v-row
        class="fill-height ma-0"
        align="center"
        justify="center"
      >
        <v-progress-circular
          indeterminate
          color="grey-lighten-5"
        />
      </v-row>
    </template>
  </v-img>
</template>

<script setup lang="ts">
const { cover = false, height = undefined, lazySrc = undefined, width = undefined } = defineProps<{
  alt: string
  cover?: boolean
  height?: number | string
  lazySrc?: string
  src: string
  width?: number | string
}>()
</script>
