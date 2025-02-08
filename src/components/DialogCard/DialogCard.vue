<template>
  <v-row>
    <DialogCardItem
      v-for="(item, index) in items"
      :key="index"
      :component-name
      :custom-button-text
      :index
      :item
      :transition
    >
      <template #chipsAndLinks>
        <v-row
          v-if="item?.chips"
          class="mt-4 mb-3"
          justify="center"
        >
          <SkillChip
            v-for="(label, chipIndex) in item?.chips"
            :key="chipIndex"
            :label
            target="_blank"
          />
        </v-row>

        <v-row
          v-if="item.links"
          class="dialog-card-item__logos"
        >
          <v-col
            v-for="(link, colIndex) in item.links"
            :key="colIndex"
          >
            <a
              :href="link.url"
              target="_blank"
              @click="sendDialogCardClickAnalyticsEvent(item)"
            >
              <GenericImage
                :alt="link.img"
                :src="linkImgPath(link.img)"
                class="image-animation"
                height="40"
              />
            </a>
          </v-col>
        </v-row>
      </template>

      <template #imageGallery>
        <v-card-text>
          <ImageGallery
            :component-name
            :images="item.images"
            :type="item.type"
          />
        </v-card-text>
      </template>
    </DialogCardItem>
  </v-row>
</template>

<script setup lang="ts">
import type { Hobby } from '@/types/Hobby'
import type { Project } from '@/types/Project'

import DialogCardItem from '@/components/DialogCard/DialogCardItem/DialogCardItem.vue'
import GenericImage from '@/components/GenericImage/GenericImage.vue'
import ImageGallery from '@/components/ImageGallery/ImageGallery.vue'
import SkillChip from '@/components/SkillChip/SkillChip.vue'
import { useImagePath } from '@/composables/common/image-path.js'
import { useGoogleAnalyticsEvent } from '@/composables/event/google-analytics.js'

interface Props {
  componentName: string
  customButtonText?: boolean
  items: Hobby[] | Project[]
  transition?: string
}

const { componentName, customButtonText = false, items, transition = 'dialog-bottom-transition' } = defineProps<Props>()

function linkImgPath(image: string): string {
  const { path } = useImagePath({
    directory: `${componentName}`,
    image: `logo/${image}`,
  })

  return path.value
}

function sendDialogCardClickAnalyticsEvent(item: Hobby | Project): void {
  useGoogleAnalyticsEvent({
    action: `dialog-card:click`,
    category: componentName,
    label: item.title,
  })
}
</script>
