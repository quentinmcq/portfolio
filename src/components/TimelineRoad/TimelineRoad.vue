<template>
  <CategoryTitle :component-name="componentName" />

  <v-timeline class="timeline__container" :density="timelineDensity" line-color="white">
    <TimelineRoadItem
      v-for="(item, index) in items"
      :key="index"
      :index="index"
      :item="item"
      :component-name="componentName"
    />
  </v-timeline>
</template>

<script setup lang="ts">
import { useResponsive } from '@/composables/style/responsive';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';
import TimelineRoadItem from '@/components/TimelineRoad/TimelineRoadItem/TimelineRoadItem.vue';
import type { Experience } from '@/types/Experience';
import type { Education } from '@/types/Education';

interface Props {
  items: Experience[] | Education[]
  componentName: string
}

defineProps<Props>();

const { timelineDensity } = useResponsive();
</script>

<style lang="scss" src="./timeline-road.scss" />
