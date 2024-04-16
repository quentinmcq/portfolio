<template>
  <v-container
    :id="componentName"
    class="skill-page"
  >
    <CategoryTitle :component-name="componentName" />

    <v-card
      class="card-animation skill-page__card"
      data-aos="zoom-in"
    >
      <v-row
        :style="gridStyle"
        class="skill-page__grid"
      >
        <SkillPageItem
          v-for="(skill, index) in skills"
          :key="index"
          :index="index"
          :skill="skill"
        />
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import { useComponentName } from '@/composables/common/component-name'
import { useResponsive } from '@/composables/style/responsive'
import skills from '@/data/fr/skill'

import SkillPageItem from './SkillPageItem/SkillPageItem.vue'

const componentName = useComponentName()
const { gridStyle } = useResponsive()
</script>

<style lang="scss" src="./skill-page.scss" scoped />
