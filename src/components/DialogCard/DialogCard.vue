<template>
  <v-row>
    <DialogCardItem
      v-for="(item, index) in items"
      :key="index"
      :component-name="componentName"
      :custom-button-text="customButtonText"
      :index="index"
      :item="item"
      :transition="transition"
    >
      <template #chipsAndLinks>
        <v-row v-if="item?.chips" class="mt-4 mb-3" justify="center">
          <SkillChip
            v-for="(label, index) in item?.chips"
            :key="index"
            :label="label"
            target="_blank"
          />
        </v-row>

        <v-row v-if="item.links" class="dialog-card-item__logos">
          <v-col v-for="(link, index) in item.links" :key="index">
            <a
              :href="link.url"
              target="_blank"
              @click="sendDialogCardClickAnalyticsEvent(item)"
            >
              <GenericImage
                :alt="link.img"
                :src="linkImgPath(link.img)"
                class="image-animation"
                eager
                height="40"
              />
            </a>
          </v-col>
        </v-row>
      </template>

      <template #imageGallery>
        <v-card-text>
          <ImageGallery
            v-if="item.images"
            :component-name="componentName"
            :images="item.images"
            :type="item.type"
          />
        </v-card-text>
      </template>
    </DialogCardItem>
  </v-row>
</template>

<script setup lang="ts">
import {useImagePath} from '@/composables/common/image-path.js';
import {useGoogleAnalyticsEvent} from '@/composables/event/google-analytics.js';
import DialogCardItem from '@/components/DialogCard/DialogCardItem/DialogCardItem.vue';
import SkillChip from '@/components/SkillChip/SkillChip.vue';
import GenericImage from '@/components/GenericImage/GenericImage.vue';
import ImageGallery from '@/components/ImageGallery/ImageGallery.vue';
import type {Hobby} from '@/types/Hobby';
import type {Project} from '@/types/Project';
import {toRefs} from 'vue';

interface Props {
  items: Project[] | Hobby[]
  componentName: string
  customButtonText?: boolean
  transition?: string
}

const props = withDefaults(defineProps<Props>(), {
  customButtonText: false,
  transition: 'dialog-bottom-transition'
});

const { componentName } = toRefs(props);

function linkImgPath(image: string): string {
  const {path} = useImagePath({
    directory: `${props.componentName}`,
    image: `logo/${image}`
  });

  return path.value;
}

function sendDialogCardClickAnalyticsEvent(item: Project | Hobby): void {
  useGoogleAnalyticsEvent({
    action: `dialog-card:click`,
    category: componentName,
    label: item.title
  });
}
</script>
