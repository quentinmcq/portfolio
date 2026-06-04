<template>
  <section :id="componentName" class="section hobby">
    <div class="container">
      <CategoryTitle :component-name />

      <ul class="hobby__list">
        <li
          v-for="(entry, index) in hobbies"
          :key="entry.title"
          class="hobby__row"
          data-reveal
          :style="{ '--reveal-delay': `${index * 100}ms` }"
        >
          <span class="hobby__title">{{ entry.title }}</span>
          <p class="hobby__description">
            {{ entry.description }}
          </p>
          <a
            v-if="entry.link"
            :href="entry.link"
            target="_blank"
            rel="noopener"
            class="hobby__link"
            :aria-label="entry.button"
          >
            <span>{{ entry.button }}</span>
            <svg
              aria-hidden="true"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import type { Hobby } from '@/types/Hobby'

const componentName = 'hobby'
const { tm } = useI18n()

const hobbies = computed(() => tm('hobby.list') as Hobby[])
</script>

<style lang="scss" src="./hobby-section.scss" scoped />
