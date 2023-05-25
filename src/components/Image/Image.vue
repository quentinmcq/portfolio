<template>
  <v-img
    class="image"
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

<script setup>
defineProps({
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  },
  maxWidth: {
    type: [String, Number],
    default: undefined
  },
  maxHeight: {
    type: [String, Number],
    default: undefined
  },
  src: {
    type: String,
    required: true
  },
  lazySrc: {
    type: String,
    default: undefined
  },
  aspectRatio: {
    type: String,
    default: undefined
  },
  cover: {
    type: Boolean,
    default: false
  },
  eager: {
    type: Boolean,
    default: false
  },
  alt: {
    type: String,
    required: true
  },
  loader: {
    type: Boolean,
    default: true
  }
});
</script>
