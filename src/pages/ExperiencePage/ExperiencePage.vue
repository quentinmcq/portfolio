<template>
  <v-container :id="componentName" class="experience">
    <TimelineRoad :items="experiences" :componentName="componentName" />
  </v-container>
</template>

<script setup lang="ts">
import experiences from '@/data/fr/experience';
import TimelineRoad from '@/components/TimelineRoad/TimelineRoad.vue';
import { useComponentName } from '@/composables/common/component-name';

const componentName = useComponentName();
</script>
