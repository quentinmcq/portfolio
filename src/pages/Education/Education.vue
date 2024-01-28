<template>
  <v-container :id="label" class="education">
    <timeline :items="items" :label="label" />
  </v-container>
</template>

<script setup lang="ts">
import Timeline from '@/components/Timeline/Timeline.vue';
import type { Education } from '@/types/Education';

interface Props {
  items: Education[],
  label: string
}

defineProps<Props>();
</script>
