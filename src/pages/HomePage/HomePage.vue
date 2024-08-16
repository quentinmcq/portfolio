<template>
  <div>
    <TheLoadingBar />
    <TheScrollTop />

    <PresentationPage />
    <SkillPage />
    <ExperiencePage />
    <!--    <EducationPage />-->
    <ProjectPage />
    <HobbyPage />
    <ContactPage />
  </div>
</template>

<script setup lang="ts">
import TheLoadingBar from '@/components/TheLoadingBar/TheLoadingBar.vue'
import TheScrollTop from '@/components/TheScrollTop/TheScrollTop.vue'
import ContactPage from '@/pages/ContactPage/ContactPage.vue'
// import EducationPage from '@/pages/EducationPage/EducationPage.vue'
import ExperiencePage from '@/pages/ExperiencePage/ExperiencePage.vue'
import HobbyPage from '@/pages/HobbyPage/HobbyPage.vue'
import PresentationPage from '@/pages/PresentationPage/PresentationPage.vue'
import ProjectPage from '@/pages/ProjectPage/ProjectPage.vue'
import SkillPage from '@/pages/SkillPage/SkillPage.vue'
</script>
