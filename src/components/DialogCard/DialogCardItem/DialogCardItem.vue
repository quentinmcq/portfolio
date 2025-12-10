<template>
  <v-col
    class="dialog-card-item"
    md="12"
    lg="6"
  >
    <div class="card-animation dialog-card-item__wrapper">
      <v-card
        color="transparent"
        class="dialog-card-item__card"
        :data-aos="animation"
      >
        <div class="dialog-card-item__image-container">
          <GenericImage
            :src="path"
            :lazy-src="path"
            :alt="item.cover"
            height="240"
            cover
          />
          
          <!-- Hover Overlay -->
          <div class="dialog-card-item__overlay">
            <div class="dialog-card-item__overlay-content">
              <h3 class="dialog-card-item__overlay-title">
                {{ item.title }}
                <span v-if="item.year" class="dialog-card-item__overlay-year">({{ item.year }})</span>
              </h3>
              
              <p class="dialog-card-item__overlay-description">
                {{ item.description }}
              </p>
              
              <!-- Chips -->
              <div v-if="item?.chips" class="dialog-card-item__overlay-chips">
                <SkillChip
                  v-for="(label, chipIndex) in item?.chips"
                  :key="chipIndex"
                  :label
                  target="_blank"
                />
              </div>
              
              <!-- Image Gallery for Hobbies -->
              <div v-if="item.hasImages" class="dialog-card-item__overlay-gallery">
                <slot name="imageGallery" />
              </div>
              
              <!-- Link Button -->
              <v-btn
                v-if="item.link"
                :href="item.link"
                :size="buttonSize"
                color="transparent"
                class="dialog-card-item__overlay-btn"
                target="_blank"
                variant="outlined"
                @click="sendFindOutMoreButtonClickAnalyticsEvent"
                :aria-label="$t(buttonText)"
              >
                {{ $t(buttonText) }}
              </v-btn>
            </div>
          </div>
        </div>

        <v-card-title class="dialog-card-item__card__title pt-3">
          {{ item.title }}
          <span v-if="item.year">({{ item.year }})</span>
        </v-card-title>

        <v-card-text
          v-if="item.subtitle"
          class="dialog-card-item__card__subtitle"
        >
          {{ item.subtitle }}
        </v-card-text>
      </v-card>
    </div>
  </v-col>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { Hobby } from '@/types/Hobby'
import type { Project } from '@/types/Project'

import GenericImage from '@/components/GenericImage/GenericImage.vue'
import SkillChip from '@/components/SkillChip/SkillChip.vue'
import { useImagePath } from '@/composables/common/image-path'
import { useGoogleAnalyticsEvent } from '@/composables/event/google-analytics'
import { useAnimation } from '@/composables/style/animation'
import { useResponsive } from '@/composables/style/responsive'

const { componentName, customButtonText = false, index, item, transition = 'dialog-bottom-transition' } = defineProps<{
  componentName: string
  customButtonText?: boolean
  index: number
  item: Hobby | Project
  transition?: string
}>()

const { buttonSize } = useResponsive()

const buttonText = computed(() =>
  customButtonText ? item.button : 'project.find-out-more',
)

const { path } = useImagePath({
  directory: componentName,
  image: item.cover,
})

const { animation } = useAnimation({
  componentType: 'dialog',
  index,
})

function sendFindOutMoreButtonClickAnalyticsEvent(): void {
  useGoogleAnalyticsEvent({
    action: `find-out-more-button:click`,
    category: componentName,
    label: item.title,
  })
}
</script>

<style lang="scss" src="./dialog-card-item.scss" />
