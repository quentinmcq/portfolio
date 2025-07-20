<template>
  <v-row>
    <DialogCardItem
      v-for="(item, index) in items"
      :key="index"
      :component-name
      :custom-button-text="customButtonText"
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
      </template>

      <template #imageGallery>
        <v-card-text>
          <ImageGallery
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
import ImageGallery from '@/components/ImageGallery/ImageGallery.vue'
import SkillChip from '@/components/SkillChip/SkillChip.vue'

const { componentName, customButtonText = false, items, transition = 'dialog-bottom-transition' } = defineProps<{
  componentName: string
  customButtonText?: boolean
  items: Hobby[] | Project[]
  transition?: string
}>()
</script>
