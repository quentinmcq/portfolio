<template>
  <v-timeline-item
    :dot-color="dotColor"
    class="timeline-road-item"
    fill-dot
    size="small"
  >
    <template #opposite>
      <div
        class="text-body-2 font-weight-bold text-grey-lighten-1"
        :class="index % 2 === 0 ? 'text-right' : 'text-left'"
      >
        {{ item.date }}
      </div>
    </template>

    <div
      class="glass-card pa-6"
      data-aos="fade-up"
    >
      <h3 class="text-h6 font-weight-bold text-white mb-1">
        {{ item.title }}
      </h3>
      <div class="text-subtitle-2 text-primary mb-2">
        {{ item.location }}
      </div>
      <div class="text-body-2 text-grey-lighten-2">
        {{ item.description }}
      </div>
    </div>
  </v-timeline-item>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { Experience } from '@/types/Experience'

const props = defineProps<{
  componentName: string
  index: number
  item: Experience
}>()

const dotColor = computed(() => {
  return '#38bdf8' // Primary blue
})
</script>

<style lang="scss" scoped>
:deep(.v-timeline-divider__dot) {
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
}
</style>
