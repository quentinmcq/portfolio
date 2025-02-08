<template>
  <v-container
    :id="componentName"
    class="experience"
  >
    <TimelineRoad
      :items="experiences"
      :component-name
    />
  </v-container>
</template>

<script setup lang="ts">
import TimelineRoad from '@/components/TimelineRoad/TimelineRoad.vue'
import { useComponentName } from '@/composables/common/component-name'
import experiences from '@/data/fr/experience'

const componentName = useComponentName()
</script>
