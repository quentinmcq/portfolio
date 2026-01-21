<template>
  <v-col
    class="dialog-card-item"
    md="6"
  >
    <div class="card-animation">
      <v-card
        class="dialog-card-item__card glass-card"
        color="transparent"
        :data-aos="animation"
        link
      >
        <div @click="dialog = true">
          <GenericImage
            :src="path"
            :lazy-src="path"
            :alt="item.cover"
            height="180"
            cover
          />

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
        </div>
      </v-card>

      <v-dialog
        v-model="dialog"
        :transition
        width="auto"
      >
        <v-card
          class="dialog-card-item__popin glass-effect"
          color="rgba(30, 41, 59, 0.95)"
        >
          <div class="dialog-card-item__popin__cross-icon">
            <v-icon
              class="cross-icon"
              color="white"
              icon="mdi-close"
              right
              size="30"
              @click="dialog = false"
            />
          </div>

          <v-card-text>
            {{ item.description }}

            <!-- Overloads the component with additional custom content (chips, logos, ...) -->
            <slot name="chipsAndLinks" />
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn
              :disabled="!item.link"
              :href="item.link"
              :size="buttonSize"
              color="#e52c4d"
              target="_blank"
              variant="outlined"
              @click="sendFindOutMoreButtonClickAnalyticsEvent"
              :aria-label="$t(buttonText)"
            >
              {{ $t(buttonText) }}
            </v-btn>
          </v-card-actions>

          <slot
            name="imageGallery"
            v-if="item.hasImages"
          />
        </v-card>
      </v-dialog>
    </div>
  </v-col>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import type { Hobby } from '@/types/Hobby'
import type { Project } from '@/types/Project'

import GenericImage from '@/components/GenericImage/GenericImage.vue'
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

const dialog = ref(false)

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
