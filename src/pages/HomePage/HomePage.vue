<template>
  <div>
    <TheLoadingBar />
    <TheScrollTop />

    <div v-if="hasConsent">
      I have consent
    </div>
    <div v-else>
      <button @click="rejectAll">
        Reject all
      </button>
      <button @click="acceptAll">
        Accept all
      </button>
    </div>

    <PresentationPage />
    <SkillPage />
    <ExperiencePage />
    <ProjectPage />
    <HobbyPage />
    <ContactPage />
  </div>
</template>

<script setup lang="ts">
import TheLoadingBar from '@/components/TheLoadingBar/TheLoadingBar.vue'
import TheScrollTop from '@/components/TheScrollTop/TheScrollTop.vue'
import ContactPage from '@/pages/ContactPage/ContactPage.vue'
import ExperiencePage from '@/pages/ExperiencePage/ExperiencePage.vue'
import HobbyPage from '@/pages/HobbyPage/HobbyPage.vue'
import PresentationPage from '@/pages/PresentationPage/PresentationPage.vue'
import ProjectPage from '@/pages/ProjectPage/ProjectPage.vue'
import SkillPage from '@/pages/SkillPage/SkillPage.vue'
import { useConsent } from 'vue-gtag'

const { acceptAll, hasConsent, rejectAll } = useConsent()
</script>
