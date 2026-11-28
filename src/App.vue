<template>
  <div class="app">
    <a class="skip-link" href="#main">{{ $t('common.skip-to-content') }}</a>

    <div class="app-grain" aria-hidden="true" />

    <TheNavbar />

    <main v-if="project" id="main" class="app__main">
      <ProjectPage :item="project" />
      <ContactSection />
    </main>

    <template v-else>
      <TheHeader />

      <main id="main" class="app__main">
        <SkillSection />
        <ExperienceSection />
        <ProjectSection />
        <HobbySection />
        <ContactSection />
      </main>
    </template>

    <TheFooter />
    <TheScrollTop />
    <LivePresence />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { Project } from '@/types/Project'

import LivePresence from '@/components/LivePresence/LivePresence.vue'
import TheFooter from '@/components/TheFooter/TheFooter.vue'
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import TheNavbar from '@/components/TheNavbar/TheNavbar.vue'
import TheScrollTop from '@/components/TheScrollTop/TheScrollTop.vue'
import { useMessageList } from '@/composables/message-list'
import { useRevealOnScroll } from '@/composables/reveal-on-scroll'
import { route } from '@/routes'
import ContactSection from '@/sections/ContactSection/ContactSection.vue'
import ExperienceSection from '@/sections/ExperienceSection/ExperienceSection.vue'
import HobbySection from '@/sections/HobbySection/HobbySection.vue'
import ProjectPage from '@/sections/ProjectPage/ProjectPage.vue'
import ProjectSection from '@/sections/ProjectSection/ProjectSection.vue'
import SkillSection from '@/sections/SkillSection/SkillSection.vue'

const projects = useMessageList<Project>('project.list')

const project = computed(() =>
  route.value.slug ? projects.value.find((item) => item.slug === route.value.slug) : undefined
)

useRevealOnScroll()
</script>

<style lang="scss" src="./app.scss" />
