<template>
  <v-col class="grid-list-sm">
    <v-card class="skill-page-item__card card-animation" data-aos="zoom-in">
      <h3
        class="skill-page-item__title"
      >
        {{ skill.label }}
      </h3>

      <div class="skill-page-item__chips">
        <SkillChip
          v-for="(label, key) in skill.content"
          :key
          :label
          :color="skill.color"
          class="skill-page-item__config"
          target="_blank"
        />
      </div>
    </v-card>
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
