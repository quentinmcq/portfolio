<template>
  <v-container
    :id="componentName"
    class="skill-page"
    fluid
  >
    <CategoryTitle :component-name />

    <v-row
      class="skill-page__grid mt-16"
      justify="center"
    >
      <SkillPageItem
        v-for="(skill, index) in $tm('skill.list')"
        :key="index"
        :index="index"
        :skill="skill"
      />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useComponentName } from '@/composables/common/component-name'

import SkillPageItem from './SkillPageItem/SkillPageItem.vue'

const componentName = useComponentName()
</script>

<style lang="scss" src="./skill-page.scss" scoped />
