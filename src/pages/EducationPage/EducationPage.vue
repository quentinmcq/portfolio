<template>
  <v-container
    :id="componentName"
    class="education"
  >
    <TimelineRoad
      :items="educations"
      :component-name="componentName"
    />
  </v-container>
</template>

<script setup lang="ts">
import TimelineRoad from '@/components/TimelineRoad/TimelineRoad.vue'
import { useComponentName } from '@/composables/common/component-name'
import educations from '@/data/fr/education'

const componentName = useComponentName()
</script>
