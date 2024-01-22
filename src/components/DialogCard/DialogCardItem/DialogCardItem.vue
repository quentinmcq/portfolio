<template>
  <v-col class="dialog-card-item" md="6">
    <div class="card-animation">
      <v-card
        color="#f4f4f4"
        class="dialog-card-item__card"
        :data-aos="animation"
      >
        <div @click="dialog = true">
          <Image
            :src="path"
            :lazy-src="path"
            :alt="item.cover"
            height="180"
            cover
            eager
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

      <v-dialog v-model="dialog" :transition="transition" width="auto">
        <v-card class="dialog-card-item__popin" color="#f4f4f4">
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

          <v-card-actions class="dialog-card-item__see-more" v-if="!item.links">
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

          <slot name="imageGallery" />
        </v-card>
      </v-dialog>
    </div>
  </v-col>
</template>

<script setup lang="ts">
import { ref, toRefs, computed } from 'vue';
import { useResponsive } from '@/composables/responsive';
import { useImagePath } from '@/composables/image-path';
import { usePrefixTranslation } from '@/composables/prefix-translation';
import { useGoogleAnalyticsEvent } from '@/composables/google-analytics';
import { useAnimation } from '@/composables/animation';
import Image from '../../Image/Image.vue';

interface Props {
  item: Object,
  index: Number,
  label: String,
  customButtonText?: Boolean,
  transition?: String
}

const props = withDefaults(defineProps<Props>(), {
  customButtonText: null,
  transition: 'dialog-bottom-transition'
});

let dialog = ref(false);
const { item, index, label } = toRefs(props);

const prefix = usePrefixTranslation(label, index);
const { buttonSize } = useResponsive();

const buttonText = computed(() =>
  props.customButtonText ? `${prefix}.button` : `${props.label}.find-out-more`
);

const { path } = useImagePath({
  directory: props.label,
  image: props.item.cover
});

const { animation } = useAnimation({
  index: props.index,
  componentType: 'dialog'
});

function sendFindOutMoreButtonClickAnalyticsEvent() {
  useGoogleAnalyticsEvent({
    action: `find-out-more-button:click`,
    category: props.label,
    label: props.item.title
  });
}
</script>

<style lang="scss" src="./dialog-card-item.scss" />
