<template>
  <v-container :id="label" class="experience">
    <timeline :items="items" :label="label" />
  </v-container>
</template>

<script setup lang="ts">
import Timeline from '@/components/Timeline/Timeline.vue';
import type { Experience } from '@/types/Experience';

interface Props {
  items: Experience[],
  label: string
}

defineProps<Props>();
</script>
