<template>
  <section :id="componentName" class="section project">
    <div class="container">
      <CategoryTitle :component-name />

      <ol class="project__list">
        <li
          v-for="(item, index) in projects"
          :key="index"
          class="project__row"
          data-reveal
          :style="{ '--reveal-delay': `${index * 80}ms` }"
        >
          <span class="project__year">{{ item.year }}</span>

          <div class="project__body">
            <h3 class="project__title">
              <a
                v-if="item.link"
                :href="item.link"
                target="_blank"
                rel="noopener"
                class="project__title-link"
              >
                {{ item.title }}
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="project__title-icon"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
              <span v-else>{{ item.title }}</span>
              <span
                v-if="item.kind"
                class="project__kind-tag"
                :class="`project__kind-tag--${item.kind}`"
              >
                {{ $t(`project.kind-${item.kind}`) }}
              </span>
            </h3>

            <p v-if="item.subtitle" class="project__subtitle">
              {{ item.subtitle }}
            </p>

            <ul v-if="item.chips?.length" class="project__chips">
              <li v-for="chip in item.chips" :key="chip">
                <SkillChip :label="chip" />
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import SkillChip from '@/components/SkillChip/SkillChip.vue'
import type { Project } from '@/types/Project'

const componentName = 'project'
const { tm } = useI18n()

const projects = computed(() => tm('project.list') as Project[])
</script>

<style lang="scss" src="./project-section.scss" scoped />
