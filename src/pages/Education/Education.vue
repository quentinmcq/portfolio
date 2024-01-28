<template>
  <v-container :id="label" class="education">
    <timeline :items="items" :label="label" />
  </v-container>
</template>

<script setup lang="ts">
import Timeline from '@/components/Timeline/Timeline.vue';

interface Props {
  items: object[],
  label: string
}

defineProps<Props>();
</script>
