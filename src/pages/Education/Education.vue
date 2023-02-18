<template>
  <v-container :id="label">
    <timeline :items="items" :label="label" />
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import Timeline from '@/components/Timeline/Timeline.vue';

const label = ref('education');

defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>
