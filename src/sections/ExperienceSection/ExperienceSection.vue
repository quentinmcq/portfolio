<template>
  <section :id="componentName" class="section experience">
    <div class="container spread">
      <!-- Left, sticky: where I am now. Right: the road here. -->
      <div class="spread__head">
        <CategoryTitle :component-name />

        <FeaturedCard
          :eyebrow="$t('experience.featured.eyebrow')"
          :title="$t('experience.featured.title')"
          :period="$t('experience.featured.period')"
          :description="$t('experience.featured.description')"
          :link-label="$t('experience.featured.link-label')"
          :link-href="CONTACTS.linkedin"
        />
      </div>

      <ol class="spread__body timeline">
        <li
          v-for="(band, index) in bands"
          :key="band.year"
          class="timeline__band"
          data-reveal
          :style="{ '--reveal-delay': `${index * 90}ms` }"
        >
          <div class="timeline__year">
            <span class="timeline__year-text">{{ band.year }}</span>
          </div>

          <div class="timeline__entries">
            <TimelineRoadItem v-for="item in band.items" :key="item.title" :item />
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type { Experience } from '@/types/Experience'

import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import FeaturedCard from '@/components/FeaturedCard/FeaturedCard.vue'
import TimelineRoadItem from '@/components/TimelineRoadItem/TimelineRoadItem.vue'
import { CONTACTS } from '@/data/contacts'

interface Band {
  items: Experience[]
  year: string
}

const componentName = 'experience'
const { tm } = useI18n()

const experiences = computed(() => tm('experience.list') as Experience[])

// The current role is the featured card; everything else is the road here.
// Entries sharing a period (e.g. apprenticeship + master's) sit in one band —
// that overlap is the story, so show it side by side rather than as two rows.
const bands = computed<Band[]>(() => {
  const byYear = new Map<string, Band>()

  for (const item of experiences.value.slice(1)) {
    const band = byYear.get(item.year)
    if (band) band.items.push(item)
    else byYear.set(item.year, { items: [item], year: item.year })
  }

  return [...byYear.values()]
})
</script>

<style lang="scss" src="./experience-section.scss" scoped />
