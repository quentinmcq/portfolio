<template>
  <v-container :id="componentName" class="skill">
    <CategoryTitle :component-name="componentName" />

    <v-card class="card-animation skill__card" data-aos="zoom-in">
      <v-row :style="gridStyle" class="skill__grid">
        <SkillItem
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
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';
import SkillItem from '@/pages/Skill/SkillItem/SkillItem.vue';
import { useResponsive } from '@/composables/style/responsive';
import { useComponentName } from '@/composables/common/component-name';
import skills from '@/data/fr/skill';

const componentName = useComponentName();
const { gridStyle } = useResponsive();
</script>

<style lang="scss" src="./skill.scss" scoped />
