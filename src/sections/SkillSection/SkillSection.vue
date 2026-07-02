<template>
  <section :id="componentName" class="section skill">
    <div class="container">
      <CategoryTitle :component-name />

      <ol class="skill__list">
        <li
          v-for="(skill, index) in skills"
          :key="skill.label"
          class="skill__row"
          data-reveal
          :style="{ '--reveal-delay': `${index * 60}ms` }"
        >
          <div class="skill-row" :class="{ 'skill-row--primary': skill.primary }">
            <div class="skill-row__head">
              <span class="skill-row__index">{{ paddedIndex(index) }}</span>
              <h3 class="skill-row__label">
                {{ skill.label }}
                <span v-if="skill.primary" class="skill-row__primary-mark" aria-hidden="true"
                  >●</span
                >
              </h3>
            </div>

            <ul class="skill-row__tools" :aria-label="$t('skill.aria-tools')">
              <li v-for="label in skill.content" :key="label" class="skill-row__tool">
                <SkillChip :label />
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type { Skill } from '@/types/Skill'

import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import SkillChip from '@/components/SkillChip/SkillChip.vue'

const componentName = 'skill'
const { tm } = useI18n()

const skills = computed(() => tm('skill.list') as Skill[])

function paddedIndex(index: number) {
  return String(index + 1).padStart(2, '0')
}
</script>

<style lang="scss" src="./skill-section.scss" scoped />
