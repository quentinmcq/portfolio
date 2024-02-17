<template>
  <div>
    <LoadingBar />
    <ScrollTop />

    <Presentation />
    <Skill />
    <Education />
    <Experience />
    <Project />
    <Hobby />
    <Contact />
  </div>
</template>

<script setup lang="ts">
import LoadingBar from '@/components/LoadingBar/LoadingBar.vue';
import ScrollTop from '@/components/ScrollTop/ScrollTop.vue';
import Presentation from '@/pages/Presentation/Presentation.vue';
import Skill from '@/pages/Skill/Skill.vue';
import Education from '@/pages/Education/Education.vue';
import Experience from '@/pages/Experience/Experience.vue';
import Project from '@/pages/Project/Project.vue';
import Hobby from '@/pages/Hobby/Hobby.vue';
import Contact from '@/pages/Contact/Contact.vue';
</script>
