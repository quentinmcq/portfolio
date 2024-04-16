<template>
  <v-img
    :src="src"
    :lazy-src="lazySrc"
    :aspect-ratio="aspectRatio"
    :cover="cover"
    :eager="eager"
    :width="width"
    :height="height"
    :max-width="maxWidth"
    :max-height="maxHeight"
    :alt="alt"
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
interface Props {
  alt: string
  aspectRatio?: string
  cover?: boolean
  eager?: boolean
  height?: number | string
  lazySrc?: string
  maxHeight?: number | string
  maxWidth?: number | string
  src: string
  width?: number | string
}

withDefaults(defineProps<Props>(), {
  aspectRatio: undefined,
  cover: false,
  eager: false,
  height: undefined,
  lazySrc: undefined,
  maxHeight: undefined,
  maxWidth: undefined,
  width: undefined,
})
</script>
