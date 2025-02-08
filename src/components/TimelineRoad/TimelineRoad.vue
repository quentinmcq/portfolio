<template>
  <CategoryTitle :component-name />

  <v-timeline
    :density="timelineDensity"
    class="timeline__container"
    line-color="white"
  >
    <TimelineRoadItem
      v-for="(item, index) in items"
      :key="index"
      :index
      :item
      :component-name
    />
  </v-timeline>
</template>

<script setup lang="ts">
import type { Experience } from '@/types/Experience'

import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import TimelineRoadItem from '@/components/TimelineRoad/TimelineRoadItem/TimelineRoadItem.vue'
import { useResponsive } from '@/composables/style/responsive'

defineProps<{
  componentName: string
  items: Experience[]
}>()

const { timelineDensity } = useResponsive()
</script>

<style lang="scss" src="./timeline-road.scss" />
