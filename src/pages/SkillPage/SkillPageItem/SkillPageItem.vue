<template>
  <div>
    <h3 class="text-h6 font-weight-bold mb-4 text-white">
      {{ skill.label }}
    </h3>

    <div class="d-flex flex-wrap gap-2">
      <SkillChip
        v-for="(label, key) in skill.content"
        :key="key"
        :label="label"
        :color="skill.color"
        target="_blank"
        class="mb-2 mr-2"
        style="opacity: 1 !important;"
      />
    </div>
  </div>
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
