<template>
  <v-col
    cols="12"
    md="6"
    lg="4"
    class="d-flex"
  >
    <v-card
      class="skill-page-item__card glass-card w-100"
      data-aos="fade-up"
    >
      <v-card-title class="skill-page-item__title justify-center d-flex">
        {{ skill.label }}
      </v-card-title>

      <v-card-text class="text-center">
        <SkillChip
          v-for="(label, key) in skill.content"
          :key="key"
          :label="label"
          :color="skill.color"
          class="skill-page-item__chip ma-1"
          target="_blank"
        />
      </v-card-text>
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
