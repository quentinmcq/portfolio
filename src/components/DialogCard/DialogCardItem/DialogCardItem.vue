<template>
  <v-col
    class="dialog-card-item"
    cols="12"
    sm="6"
    md="4"
    lg="3"
  >
    <div
      class="glass-card pa-0 overflow-hidden h-100 position-relative group"
      data-aos="fade-up"
      style="min-height: 300px; cursor: pointer;"
      @click="dialog = true"
    >
      <!-- Image Background -->
      <GenericImage
        :src="path"
        :lazy-src="path"
        :alt="item.cover"
        cover
        class="w-100 h-100 position-absolute top-0 left-0 transition-transform"
        style="transition: transform 0.5s ease;"
      />

      <!-- Overlay Gradient -->
      <div
        class="position-absolute w-100 h-100 top-0 left-0"
        style="background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 50%, transparent 100%);"
      />

      <!-- Content (Bottom aligned) -->
      <div class="position-absolute bottom-0 w-100 pa-6">
        <h3 class="text-white font-weight-bold text-h6 mb-1">
          {{ item.title }}
        </h3>
        <div
          class="text-primary text-subtitle-2 mb-2"
          v-if="item.year"
        >
          {{ item.year }}
        </div>
        <p class="text-grey-lighten-2 text-body-2 text-truncate">
          {{ item.subtitle }}
        </p>
      </div>

      <!-- Popin Dialog -->
      <v-dialog
        v-model="dialog"
        :transition
        width="auto"
        max-width="800"
      >
        <v-card
          color="#0f172a"
          class="border-thin glass-border"
        >
          <div class="position-relative">
            <GenericImage
              :src="path"
              :lazy-src="path"
              :alt="item.cover"
              height="300"
              cover
            />
            <v-btn
              icon="mdi-close"
              variant="text"
              color="white"
              class="position-absolute top-0 right-0 ma-4 bg-black-alpha"
              @click.stop="dialog = false"
            />
          </div>

          <v-card-text class="pa-6">
            <h2 class="text-h4 font-weight-bold text-white mb-4">
              {{ item.title }}
            </h2>

            <p class="text-body-1 text-grey-lighten-1 mb-6">
              {{ item.description }}
            </p>

            <!-- Custom Content Slot -->
            <slot name="chipsAndLinks" />

            <div class="d-flex justify-center mt-6">
              <v-btn
                v-if="item.link"
                :href="item.link"
                target="_blank"
                color="primary"
                variant="flat"
                prepend-icon="mdi-open-in-new"
                @click="sendFindOutMoreButtonClickAnalyticsEvent"
              >
                {{ $t(buttonText) }}
              </v-btn>
            </div>

            <slot
              name="imageGallery"
              v-if="item.hasImages"
            />
          </v-card-text>
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
import { useResponsive } from '@/composables/style/responsive'

const { componentName, customButtonText = false, index, item, transition = 'dialog-bottom-transition' } = defineProps<{
  componentName: string
  customButtonText?: boolean
  index: number
  item: Hobby | Project
  transition?: string
}>()

const dialog = ref(false)

const buttonText = computed(() =>
  customButtonText ? item.button : 'project.find-out-more',
)

const { path } = useImagePath({
  directory: componentName,
  image: item.cover,
})

function sendFindOutMoreButtonClickAnalyticsEvent(): void {
  useGoogleAnalyticsEvent({
    action: `find-out-more-button:click`,
    category: componentName,
    label: item.title,
  })
}
</script>

<style lang="scss" scoped>
.group:hover .transition-transform {
  transform: scale(1.1);
}
.bg-black-alpha {
  background-color: rgba(0,0,0,0.5);
}
.glass-border {
  border: 1px solid rgba(255,255,255,0.1);
}
</style>
