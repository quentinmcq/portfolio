<template>
  <v-container :id="componentName" class="education">
    <Timeline :items="educations" :componentName="componentName" />
  </v-container>
</template>

<script setup lang="ts">
import educations from '@/data/fr/education';
import Timeline from '@/components/Timeline/Timeline.vue';
import { useComponentName } from '@/composables/common/component-name';

const componentName = useComponentName();
</script>
