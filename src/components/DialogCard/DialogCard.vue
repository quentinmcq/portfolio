<template>
  <v-row>
    <dialog-card-item
      v-for="(item, index) in items"
      :key="index"
      :custom-button-text="customButtonText"
      :index="index"
      :item="item"
      :label="label"
      :transition="transition"
    >
      <template #chipsAndLinks>
        <v-row v-if="item?.chips" class="mt-4 mb-3" justify="center">
          <skill-chip
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
              @click="sendDialogCardClickAnalyticsEvent"
            >
              <Image
                class="image-animation"
                :src="linkImgPath(link.img)"
                :alt="link.img"
                height="40"
                eager
              />
            </a>
          </v-col>
        </v-row>
      </template>

      <template #imageGallery>
        <v-card-text>
          <ImageGallery
            v-if="item.images"
            :images="item.images"
            :label="label"
            :type="item.type"
          />
        </v-card-text>
      </template>
    </dialog-card-item>
  </v-row>
</template>

<script setup lang="ts">
import { useImagePath } from '@/composables/image-path.js';
import { useGoogleAnalyticsEvent } from '@/composables/google-analytics.js';
import DialogCardItem from '@/components/DialogCard/DialogCardItem/DialogCardItem.vue';
import SkillChip from '@/components/SkillChip/SkillChip.vue';
import Image from '@/components/Image/Image.vue';
import ImageGallery from '@/components/Image/ImageGallery/ImageGallery.vue';
import type { Hobby } from '@/types/Hobby';
import type { Project } from '@/types/Project';
import { toRefs } from 'vue';

interface Props {
  items: Project[] | Hobby[];
  label: string;
  customButtonText?: boolean;
  transition?: string;
}

const props = withDefaults(defineProps<Props>(), {
  customButtonText: null,
  transition: 'dialog-bottom-transition'
});

const { label } = toRefs(props);

function linkImgPath(image) {
  const { path } = useImagePath({
    directory: `${props.label}`,
    image: `logo/${image}`
  });

  return path.value;
}

function sendDialogCardClickAnalyticsEvent() {
  useGoogleAnalyticsEvent({
    action: `dialog-card:click`,
    category: label,
    label: item.value.title
  });
}
</script>
