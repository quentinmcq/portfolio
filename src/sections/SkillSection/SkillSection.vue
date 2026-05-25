<template>
  <section
    :id="componentName"
    class="section skill"
  >
    <div class="container">
      <CategoryTitle :component-name />

      <ol class="skill__list">
        <li
          v-for="(skill, index) in $tm('skill.list')"
          :key="index"
          class="skill__row"
          data-reveal
          :style="{ '--reveal-delay': `${index * 60}ms` }"
        >
          <SkillItem
            :index
            :skill
          />
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'

import SkillItem from './SkillItem/SkillItem.vue'

const componentName = 'skill'
</script>

<style lang="scss" src="./skill-section.scss" scoped />
