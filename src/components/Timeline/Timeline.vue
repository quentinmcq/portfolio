<template>
  <category-title :label="label" />

  <v-timeline class="timeline__container" :density="timelineDensity" line-color="white">
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
import type { Experience } from '@/types/Experience';
import type { Education } from '@/types/Education';

interface Props {
  items: Experience[] | Education[];
  label: string;
}

defineProps<Props>();

const { timelineDensity } = useResponsive();
</script>

<style lang="scss" src="./timeline.scss" />
