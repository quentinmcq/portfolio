<template>
  <section id="project" class="section project">
    <div class="container">
      <CategoryTitle section="project" wide />

      <ol class="project__index">
        <li
          v-for="(item, index) in projects"
          :key="item.title"
          class="project-row"
          :class="{ 'project-row--linked': !!item.link }"
          data-reveal
          :style="{ '--reveal-delay': `${index * 70}ms` }"
        >
          <span class="project-row__year">{{ item.year }}</span>

          <h3 class="project-row__title">
            <a
              v-if="item.link"
              :href="item.link"
              target="_blank"
              rel="noopener"
              class="project-row__link"
            >
              {{ item.title }}
            </a>
            <span v-else>{{ item.title }}</span>
          </h3>

          <div class="project-row__meta">
            <span class="project-row__kind" :class="`project-row__kind--${item.kind}`">
              {{ $t(`project.kind-${item.kind}`) }}
            </span>
            <svg
              v-if="item.link"
              aria-hidden="true"
              class="project-row__arrow"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </div>

          <p v-if="item.subtitle" class="project-row__subtitle">
            {{ item.subtitle }}
          </p>

          <ul v-if="item.chips?.length" class="project-row__chips">
            <li v-for="chip in item.chips" :key="chip">
              <SkillChip :label="chip" />
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import SkillChip from '@/components/SkillChip/SkillChip.vue'
import { useMessageList } from '@/composables/message-list'
import type { Project } from '@/types/Project'

const projects = useMessageList<Project>('project.list')
</script>

<style lang="scss" src="./project-section.scss" scoped />
