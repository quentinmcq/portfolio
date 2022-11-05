<template>
  <div>
    <LoadingBar />
    <ScrollTop />
    <Presentation />
    <Skill :skills="skills" />
    <Education :items="educations" />
    <Experience :items="experiences" />
    <Project :items="projects" />
    <Hobby :items="hobbies" />
    <Contact />
  </div>
</template>

<script setup>
import skills from '@/data/fr/skill';
import educations from '@/data/fr/education';
import experiences from '@/data/fr/experience';
import projects from '@/data/fr/project';
import hobbies from '@/data/fr/hobby';
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
