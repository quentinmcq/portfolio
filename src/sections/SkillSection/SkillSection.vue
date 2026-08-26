<template>
  <section :id="componentName" class="section skill">
    <div class="container spread">
      <CategoryTitle class="spread__head" :component-name />

      <div class="spread__body">
        <!-- The daily stack, set as type: this is the headline of the section. -->
        <div v-if="primary" class="skill-lead">
          <ul class="skill-lead__list" :aria-label="primary.label">
            <!-- One tool after another — the only entrance that earns a rhythm. -->
            <li
              v-for="(label, index) in primary.content"
              :key="label"
              class="skill-lead__item"
              data-reveal
              :style="{ '--reveal-delay': `${index * 60}ms`, '--reveal-shift': '16px' }"
            >
              <SkillChip :label size="lg" />
            </li>
          </ul>
        </div>

        <ol class="skill-piles">
          <li
            v-for="(pile, index) in secondary"
            :key="pile.label"
            class="skill-pile"
            data-reveal
            :style="{ '--reveal-delay': `${(index + 1) * 80}ms` }"
          >
            <h3 class="skill-pile__label">{{ pile.label }}</h3>
            <ul class="skill-pile__tools" :aria-label="$t('skill.aria-tools')">
              <li v-for="label in pile.content" :key="label">
                <SkillChip :label />
              </li>
            </ul>
          </li>
        </ol>
      </div>
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
const primary = computed(() => skills.value.find((skill) => skill.primary))
const secondary = computed(() => skills.value.filter((skill) => !skill.primary))
</script>

<style lang="scss" src="./skill-section.scss" scoped />
