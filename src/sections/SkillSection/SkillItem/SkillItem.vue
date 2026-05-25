<template>
  <div
    class="skill-row"
    :class="{ 'skill-row--primary': skill.primary }"
  >
    <div class="skill-row__head">
      <span class="skill-row__index">{{ paddedIndex }}</span>
      <h3 class="skill-row__label">
        {{ skill.label }}
        <span
          v-if="skill.primary"
          class="skill-row__primary-mark"
          aria-hidden="true"
        >●</span>
      </h3>
    </div>

    <ul
      class="skill-row__tools"
      aria-label="Tools"
    >
      <li
        v-for="(label, key) in skill.content"
        :key
        class="skill-row__tool"
      >
        <SkillChip :label />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { Skill } from '@/types/Skill'

import SkillChip from '@/components/SkillChip/SkillChip.vue'

const { index, skill } = defineProps<{
  index: number
  skill: Skill
}>()

const paddedIndex = computed(() => String(index + 1).padStart(2, '0'))
</script>

<style lang="scss" src="./skill-item.scss" scoped />
