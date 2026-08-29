<template>
  <section id="project" class="section project">
    <div class="container">
      <CategoryTitle section="project" wide />

      <ol class="project__list">
        <li v-for="item in projects" :key="item.title">
          <ProjectCase :item />
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import ProjectCase from '@/components/ProjectCase/ProjectCase.vue'
import { useMessageList } from '@/composables/message-list'
import type { Project } from '@/types/Project'

const projects = useMessageList<Project>('project.list')
</script>

<style lang="scss" src="./project-section.scss" scoped />
