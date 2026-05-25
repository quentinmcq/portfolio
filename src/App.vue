<template>
  <div class="app">
    <a class="skip-link" href="#main">{{ $t('common.skip-to-content') }}</a>

    <div
      class="app-grain"
      aria-hidden="true"
    />

    <TheNavbar />
    <TheHeader />

    <main id="main" class="app__main">
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
      <HobbySection />
      <ContactSection />
    </main>

    <TheFooter />
    <TheScrollTop />
  </div>
</template>

<script setup lang="ts">
import TheFooter from '@/components/TheFooter/TheFooter.vue'
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import TheNavbar from '@/components/TheNavbar/TheNavbar.vue'
import TheScrollTop from '@/components/TheScrollTop/TheScrollTop.vue'
import { useRevealOnScroll } from '@/composables/reveal-on-scroll'
import { useTheme } from '@/composables/theme'
import ContactSection from '@/sections/ContactSection/ContactSection.vue'
import ExperienceSection from '@/sections/ExperienceSection/ExperienceSection.vue'
import HobbySection from '@/sections/HobbySection/HobbySection.vue'
import ProjectSection from '@/sections/ProjectSection/ProjectSection.vue'
import SkillSection from '@/sections/SkillSection/SkillSection.vue'

useTheme()
useRevealOnScroll()
</script>

<style lang="scss" src="./app.scss" />
