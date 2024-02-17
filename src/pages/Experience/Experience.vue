<template>
  <v-container :id="componentName" class="experience">
    <Timeline :items="experiences" :componentName="componentName" />
  </v-container>
</template>

<script setup lang="ts">
import experiences from '@/data/fr/experience';
import Timeline from '@/components/Timeline/Timeline.vue';
import { useComponentName } from '@/composables/common/component-name';

const componentName = useComponentName();
</script>
