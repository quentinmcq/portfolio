<template>
  <v-col class="grid-list-sm">
    <h3
      class="skill-page-item__title"
      data-aos="zoom-in"
    >
      {{ skill.label }}
    </h3>

    <SkillChip
      v-for="(label, key) in skill.content"
      :key
      :label
      :color="skill.color"
      class="skill-page-item__config"
      target="_blank"
      data-aos="zoom-in"
    />
  </v-col>
</template>

<script setup lang="ts">
import type { Skill } from '@/types/Skill'

import SkillChip from '@/components/SkillChip/SkillChip.vue'

defineProps<{
  index: number
  skill: Skill
}>()
</script>

<style lang="scss" src="./skill-page-item.scss" scoped />
