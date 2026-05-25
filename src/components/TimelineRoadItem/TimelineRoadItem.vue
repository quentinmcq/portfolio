<template>
  <li
    class="timeline-item"
    :class="{ 'timeline-item--education': isEducation }"
    data-reveal
    :style="{ '--reveal-delay': `${index * 100}ms` }"
  >
    <div class="timeline-item__year">
      <span class="timeline-item__year-text">{{ item.year }}</span>
    </div>

    <div
      class="timeline-item__marker"
      aria-hidden="true"
    >
      <span class="timeline-item__marker-dot" />
      <span class="timeline-item__marker-line" />
    </div>

    <article class="timeline-item__body">
      <span
        v-if="isEducation"
        class="timeline-item__kind"
      >{{ $t('experience.kind-education') }}</span>

      <h3 class="timeline-item__title">
        <a
          v-if="item.link"
          :href="item.link"
          target="_blank"
          rel="noopener"
          class="timeline-item__title-link"
        >
          {{ item.title }}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="timeline-item__title-icon"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
        <span v-else>{{ item.title }}</span>
      </h3>

      <span class="timeline-item__location">{{ item.location }}</span>

      <p
        v-if="item.subtitle"
        class="timeline-item__subtitle"
      >
        {{ item.subtitle }}
      </p>
    </article>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { Experience } from '@/types/Experience'

const { index, item } = defineProps<{
  index: number
  item: Experience
}>()

const isEducation = computed(() => item.kind === 'education')
</script>

<style lang="scss" src="./timeline-road-item.scss" scoped />
