<template>
  <CategoryTitle :component-name="componentName" />

  <v-timeline
    :density="timelineDensity"
    class="timeline__container"
    line-color="white"
  >
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
import type { Education } from '@/types/Education'
import type { Experience } from '@/types/Experience'

import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import TimelineRoadItem from '@/components/TimelineRoad/TimelineRoadItem/TimelineRoadItem.vue'
import { useResponsive } from '@/composables/style/responsive'

interface Props {
  componentName: string
  items: Education[] | Experience[]
}

defineProps<Props>()

const { timelineDensity } = useResponsive()
</script>

<style lang="scss" src="./timeline-road.scss" />
