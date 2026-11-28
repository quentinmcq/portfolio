<template>
  <section class="section project-page">
    <div class="container">
      <a class="project-page__back" :href="`${homePath}#project`">
        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
        <span>{{ $t('project.page-back') }}</span>
      </a>

      <ProjectCase :item standalone />

      <nav class="project-page__others" :aria-label="$t('project.page-others')">
        <h2 class="project-page__others-title">{{ $t('project.page-others') }}</h2>

        <ul class="project-page__others-list">
          <li v-for="other in others" :key="other.slug">
            <a
              class="project-page__other"
              :href="routePath({ locale: route.locale, slug: other.slug })"
            >
              <span class="project-page__other-year">{{ other.year }}</span>
              <span class="project-page__other-title">{{ other.title }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { Project } from '@/types/Project'

import ProjectCase from '@/components/ProjectCase/ProjectCase.vue'
import { useMessageList } from '@/composables/message-list'
import { CASES } from '@/data/cases'
import { route, routePath } from '@/routes'

const { item } = defineProps<{ item: Project }>()

const projects = useMessageList<Project>('project.list')

const homePath = computed(() => routePath({ locale: route.value.locale }))

const others = computed(() =>
  projects.value.filter(
    (project) => project.slug !== item.slug && CASES.some((entry) => entry.slug === project.slug)
  )
)
</script>

<style lang="scss" src="./project-page.scss" scoped />
