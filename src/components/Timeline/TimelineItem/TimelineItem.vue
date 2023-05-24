<template>
  <v-timeline-item dot-color="#e52c4d" :size="timelineSize">
    <template #opposite>
      <span class="timeline-item__year">{{ item.year }}</span>
    </template>

    <v-card class="timeline-item__card" color="#f4f4f4" :data-aos="animation">
      <div class="timeline-item__thumbnail-container">
        <a
          :href="item.link"
          target="_blank"
          @click="sendTimelineCardClickAnalyticsEvent"
        >
          <Image
            class="image-animation"
            :src="path"
            :lazy-src="path"
            :alt="item.image"
            height="180"
            cover
            eager
          />
        </a>
      </div>

      <v-card-title class="timeline-item__title">
        {{ $t(`${prefix}.title`) }}
      </v-card-title>

      <v-card-subtitle class="timeline-item__year" v-if="smAndDown">
        {{ $t(`${prefix}.year`) }}
      </v-card-subtitle>

      <v-card-subtitle class="timeline-item__location">
        {{ $t(`${prefix}.location`) }}
      </v-card-subtitle>

      <v-card-subtitle class="timeline-item__description" v-if="smAndUp">
        {{ $t(`${prefix}.description`) }}
      </v-card-subtitle>
    </v-card>
  </v-timeline-item>
</template>

<script setup>
import { useResponsive } from '@/composables/responsive';
import { useImagePath } from '@/composables/image-path';
import { useAnimation } from '@/composables/animation';
import { usePrefixTranslation } from '@/composables/prefix-translation';
import { useGoogleAnalyticsEvent } from '@/composables/google-analytics';
import { useDisplay } from 'vuetify';
import Image from '../../Image/Image.vue';

const { timelineSize } = useResponsive();

const props = defineProps({
  item: {
    type: Object,
    required: true
  },

  index: {
    type: Number,
    required: true
  },

  label: {
    type: String,
    required: true
  }
});

const { smAndDown, smAndUp } = useDisplay();

const prefix = usePrefixTranslation(props.label, props.index);
const { path } = useImagePath({
  directory: props.label,
  image: props.item.cover
});

function sendTimelineCardClickAnalyticsEvent() {
  useGoogleAnalyticsEvent({
    action: `timeline-card:click`,
    category: props.label,
    label: props.item.title
  });
}

const { animation } = useAnimation({
  index: props.index,
  componentType: 'timeline'
});
</script>

<style lang="scss" src="./timeline-item.scss" scoped />
