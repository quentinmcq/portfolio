<template>
  <v-container :id="label">
    <timeline :items="items" :label="label" />
  </v-container>
</template>

<script setup>
import Timeline from '@/components/Timeline/Timeline.vue';

defineProps({
  items: {
    type: Array,
    required: true
  },
  label: {
    type: String,
    required: true
  }
});
</script>
