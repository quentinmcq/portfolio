<template>
  <v-container
    :id="componentName"
    class="skill-page py-16"
  >
    <CategoryTitle :component-name />

    <div class="mt-12">
      <v-row>
        <v-col
          v-for="(skill, index) in $tm('skill.list')"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          class="d-flex"
        >
          <div
            class="glass-card w-100 pa-6 d-flex flex-column"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <!-- We will pass styling props to Item or refactor Item to be simpler -->
            <SkillPageItem
              :index="index"
              :skill="skill"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import { useComponentName } from '@/composables/common/component-name'

import SkillPageItem from './SkillPageItem/SkillPageItem.vue'

const componentName = useComponentName()
</script>

<style lang="scss" src="./skill-page.scss" scoped />
