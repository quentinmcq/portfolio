<template>
  <v-container :id="label" class="skill">
    <category-title :label="label" />

    <v-card class="card-animation skill__card" data-aos="zoom-in">
      <v-row :style="gridStyle" class="skill__grid">
        <skill-item
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
import { ref } from 'vue';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';
import SkillItem from '@/pages/Skill/SkillItem/SkillItem.vue';
import { useResponsive } from '@/composables/responsive';
import type { Skill } from '@/types/Skill';

interface Props {
  skills: Skill[]
}

defineProps<Props>();

const label = ref('skill');
const { gridStyle } = useResponsive();
</script>

<style lang="scss" src="./skill.scss" scoped />
