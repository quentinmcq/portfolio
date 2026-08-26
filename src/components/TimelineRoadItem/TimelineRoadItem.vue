<template>
  <article class="timeline-entry" :class="{ 'timeline-entry--education': isEducation }">
    <span class="timeline-entry__dot" aria-hidden="true" />

    <span v-if="isEducation" class="timeline-entry__kind">
      {{ $t('experience.kind-education') }}
    </span>

    <h3 class="timeline-entry__title">{{ item.title }}</h3>

    <span class="timeline-entry__location">{{ item.location }}</span>

    <p v-if="item.subtitle" class="timeline-entry__subtitle">
      {{ item.subtitle }}
    </p>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { Experience } from '@/types/Experience'

const { item } = defineProps<{
  item: Experience
}>()

const isEducation = computed(() => item.kind === 'education')
</script>

<style lang="scss" src="./timeline-road-item.scss" scoped />
