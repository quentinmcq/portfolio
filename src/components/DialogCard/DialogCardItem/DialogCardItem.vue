<template>
  <v-col
    class="dialog-card-item"
    md="6"
  >
    <div class="card-animation">
      <v-card
        color="#f4f4f4"
        class="dialog-card-item__card"
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
            {{ $t(`${prefix}.title`) }}
            <span v-if="item.year">({{ item.year }})</span>
          </v-card-title>

          <v-card-text
            v-if="item.subtitle"
            class="dialog-card-item__card__subtitle"
          >
            {{ $t(`${prefix}.subtitle`) }}
          </v-card-text>
        </div>
      </v-card>

      <v-dialog
        v-model="dialog"
        :transition="transition"
        width="auto"
      >
        <v-card
          class="dialog-card-item__popin"
          color="#f4f4f4"
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
            {{ $t(`${prefix}.description`) }}

            <!-- Overloads the component with additional custom content (chips, logos, ...) -->
            <slot name="chipsAndLinks" />
          </v-card-text>

          <v-card-actions
            class="justify-center"
            v-if="!item.links"
          >
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
            v-if="item.images"
          />
        </v-card>
      </v-dialog>
    </div>
  </v-col>
</template>

<script setup lang="ts">
import type { Hobby } from '@/types/Hobby'
import type { Project } from '@/types/Project'

import GenericImage from '@/components/GenericImage/GenericImage.vue'
import { useImagePath } from '@/composables/common/image-path'
import { usePrefixTranslation } from '@/composables/common/prefix-translation'
import { useGoogleAnalyticsEvent } from '@/composables/event/google-analytics'
import { useAnimation } from '@/composables/style/animation'
import { useResponsive } from '@/composables/style/responsive'
import { computed, ref, toRefs } from 'vue'

interface Props {
  componentName: string
  customButtonText?: boolean
  index: number
  item: Hobby | Project
  transition?: string
}

const props = withDefaults(defineProps<Props>(), {
  customButtonText: false,
  transition: 'dialog-bottom-transition',
})

let dialog = ref(false)
const { componentName, index, item } = toRefs(props)

const prefix = usePrefixTranslation(componentName, index)
const { buttonSize } = useResponsive()

const buttonText = computed(() =>
  props.customButtonText ? `${prefix}.button` : `${props.componentName}.find-out-more`,
)

const { path } = useImagePath({
  directory: props.componentName,
  image: props.item.cover,
})

const { animation } = useAnimation({
  componentType: 'dialog',
  index: props.index,
})

function sendFindOutMoreButtonClickAnalyticsEvent(): void {
  useGoogleAnalyticsEvent({
    action: `find-out-more-button:click`,
    category: props.componentName,
    label: props.item.title,
  })
}
</script>

<style lang="scss" src="./dialog-card-item.scss" />
