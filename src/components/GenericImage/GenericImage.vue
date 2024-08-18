<template>
  <v-img
    :src="src"
    :lazy-src="lazySrc"
    :cover="cover"
    :width="width"
    :height="height"
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
  cover?: boolean
  height?: number | string
  lazySrc?: string
  src: string
  width?: number | string
}

withDefaults(defineProps<Props>(), {
  cover: false,
  height: undefined,
  lazySrc: undefined,
  width: undefined,
})
</script>
