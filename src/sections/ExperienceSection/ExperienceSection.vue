<template>
  <section
    :id="componentName"
    class="section experience"
  >
    <div class="container">
      <CategoryTitle :component-name />

      <FeaturedCard
        :eyebrow="$t('experience.featured.eyebrow')"
        :title="$t('experience.featured.title')"
        :period="$t('experience.featured.period')"
        :description="$t('experience.featured.description')"
        :stack-label="$t('experience.featured.stack-label')"
        :stack="dailyStack"
        :link-label="$t('experience.featured.link-label')"
        :link-href="CONTACTS.linkedin"
      />

      <ol class="experience__timeline">
        <TimelineRoadItem
          v-for="(item, index) in timelineItems"
          :key="index"
          :index="index + 1"
          :item
        />
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type { Experience } from '@/types/Experience'
import type { Skill } from '@/types/Skill'

import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import FeaturedCard from '@/components/FeaturedCard/FeaturedCard.vue'
import TimelineRoadItem from '@/components/TimelineRoadItem/TimelineRoadItem.vue'
import { CONTACTS } from '@/data/contacts'

const componentName = 'experience'
const { tm } = useI18n()

// The first experience entry is showcased in the featured card.
// The timeline below shows the path that led there.
const experiences = computed(() => tm('experience.list') as Experience[])
const timelineItems = computed(() => experiences.value.slice(1))

const skills = computed(() => tm('skill.list') as Skill[])
const dailyStack = computed(() => skills.value.find(s => s.primary)?.content ?? [])
</script>

<style lang="scss" scoped>
.experience {
  &__timeline {
    list-style: none;
    margin: clamp(2rem, 4vw, 3rem) 0 0;
    padding: 0;
    border-top: 1px solid var(--line);
  }
}
</style>
