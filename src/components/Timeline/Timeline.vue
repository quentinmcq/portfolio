<template>
  <category-title :label="label" />

  <v-timeline :density="timelineDensity" line-color="white">
    <timeline-item
      v-for="(item, index) in items"
      :key="index"
      :index="index"
      :item="item"
      :label="label"
    />
  </v-timeline>
</template>

<script setup>
import { useResponsive } from '@/composables/responsive';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';
import TimelineItem from '@/components/Timeline/TimelineItem/TimelineItem.vue';

const { timelineDensity } = useResponsive();

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
