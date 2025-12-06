<template>
  <div class="home-page">
    <PresentationPage />
    <SkillPage />
    <ExperiencePage />
    <ProjectPage />
    <HobbyPage />
    <ContactPage />
  </div>
</template>

<script setup lang="ts">
import ContactPage from '@/pages/ContactPage/ContactPage.vue'
import ExperiencePage from '@/pages/ExperiencePage/ExperiencePage.vue'
import HobbyPage from '@/pages/HobbyPage/HobbyPage.vue'
import PresentationPage from '@/pages/PresentationPage/PresentationPage.vue'
import ProjectPage from '@/pages/ProjectPage/ProjectPage.vue'
import SkillPage from '@/pages/SkillPage/SkillPage.vue'
</script>
