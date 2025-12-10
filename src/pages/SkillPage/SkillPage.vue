<template>
  <v-container
    :id="componentName"
    class="skill-page"
  >
    <CategoryTitle :component-name />

    <v-row
      :style="gridStyle"
      class="skill-page__grid"
      data-aos="fade-up"
    >
      <SkillPageItem
        v-for="(skill, index) in $tm('skill.list')"
        :key="index"
        :index
        :skill
      />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import { useComponentName } from '@/composables/common/component-name'
import { useResponsive } from '@/composables/style/responsive'

import SkillPageItem from './SkillPageItem/SkillPageItem.vue'

const componentName = useComponentName()
const { gridStyle } = useResponsive()
</script>

<style lang="scss" src="./skill-page.scss" scoped />
