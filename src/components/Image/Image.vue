<template>
  <v-img
    :src="src"
    :lazySrc="lazySrc"
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
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate color="grey-lighten-5" />
      </v-row>
    </template>
  </v-img>
</template>

<script setup lang="ts">
interface Props {
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  src: string;
  lazySrc?: string;
  aspectRatio?: string;
  cover?: boolean;
  eager?: boolean;
  alt: string;
}

withDefaults(defineProps<Props>(), {
  width: undefined,
  height: undefined,
  maxWidth: undefined,
  maxHeight: undefined,
  lazySrc: undefined,
  aspectRatio: undefined,
  cover: false,
  eager: false
});
</script>
