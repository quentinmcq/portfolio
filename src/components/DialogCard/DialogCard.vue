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
      <template #customContent>
        <v-row v-if="item?.chips" class="mt-4 mb-3" justify="center">
          <chip-item
            v-for="(label, index) in item?.chips"
            :key="index"
            :label="label"
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

        <ImageGallery v-if="item.images" :images="item.images" :label="label" />
      </template>
    </dialog-card-item>
  </v-row>
</template>

<script setup>
import DialogCardItem from '@/components/DialogCard/DialogCardItem/DialogCardItem.vue';
import ChipItem from '@/components/ChipItem/ChipItem.vue';
import { useImagePath } from '../../composables/image-path';
import { useGoogleAnalyticsEvent } from '../../composables/google-analytics';
import Image from '../Image/Image.vue';
import ImageGallery from '@/components/Image/ImageGallery/ImageGallery.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  customButtonText: {
    type: Boolean,
    default: null
  },
  transition: {
    type: String,
    default: 'dialog-bottom-transition'
  }
});

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
    category: props.label,
    label: props.item.title
  });
}
</script>
