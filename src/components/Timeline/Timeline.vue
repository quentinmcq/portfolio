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

<script setup lang="ts">
import { useResponsive } from '@/composables/responsive';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';
import TimelineItem from '@/components/Timeline/TimelineItem/TimelineItem.vue';

interface Props {
  items: Array<Object>;
  label: String;
}

defineProps<Props>();

const { timelineDensity } = useResponsive();
</script>
