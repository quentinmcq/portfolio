<template>
  <section id="experience" class="section experience">
    <div class="container spread">
      <div class="spread__head">
        <CategoryTitle section="experience" />

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
            <TimelineRoadItem v-for="(item, index) in band.items" :key="index" :item />
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { Experience } from '@/types/Experience'

import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import FeaturedCard from '@/components/FeaturedCard/FeaturedCard.vue'
import TimelineRoadItem from '@/components/TimelineRoadItem/TimelineRoadItem.vue'
import { useMessageList } from '@/composables/message-list'
import { CONTACTS } from '@/data/contacts'

interface Band {
  items: Experience[]
  year: string
}

const experiences = useMessageList<Experience>('experience.list')

const bands = computed<Band[]>(() => {
  const byYear = new Map<string, Band>()

  for (const item of experiences.value) {
    const band = byYear.get(item.year)
    if (band) band.items.push(item)
    else byYear.set(item.year, { items: [item], year: item.year })
  }

  return [...byYear.values()]
})
</script>

<style lang="scss" src="./experience-section.scss" scoped />
