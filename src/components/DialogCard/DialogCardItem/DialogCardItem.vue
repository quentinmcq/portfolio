<template>
  <v-col class="dialog-card-item" md="6">
    <div class="card-animation">
      <v-card color="#f4f4f4" class="dialog-card-item__card">
        <div @click="dialog = true">
          <v-img :src="path" cover height="180" />

          <v-card-title class="pt-3">
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

      <v-dialog v-model="dialog" :transition="transition">
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

            <v-row v-if="chips" class="ma-4" justify="center">
              <chip-item
                v-for="(label, index) in chips"
                :key="index"
                :label="label"
              />
            </v-row>

            <v-row
              v-if="Array.isArray(item.link)"
              class="dialog-card-item__links"
            >
              <v-col v-for="(link, index) in item.link" :key="index">
                <a
                  :href="link.url"
                  target="_blank"
                  @click="sendDialogCardClickAnalyticsEvent"
                >
                  <v-img
                    :src="linkImgPath(link.img)"
                    height="40"
                    class="dialog-card-item__links__img"
                  />
                </a>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions class="dialog-card-item__see-more">
            <v-btn
              :disabled="!item.link"
              :href="findOutMoreLink()"
              :size="buttonSize"
              color="#e52c4d"
              target="_blank"
              variant="outlined"
              @click="sendFindOutMoreButtonClickAnalyticsEvent"
            >
              <span>{{ $t(buttonText) }}</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-col>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useResponsive } from '@/composables/responsive';
import { useImagePath } from '@/composables/image-path';
import { usePrefixTranslation } from '@/composables/prefix-translation';
import { useRandomNumberGenerator } from '@/composables/random-number';
import { useGoogleAnalyticsEvent } from '@/composables/google-analytics';
import ChipItem from '@/components/ChipItem/ChipItem.vue';

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
  },
  chips: {
    type: Array,
    default: null
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

let dialog = ref(false);
const prefix = usePrefixTranslation(props.label, props.index);
const { buttonSize } = useResponsive();
const buttonText = computed(() =>
  props.customButtonText ? `${prefix}.button` : `${props.label}.find-out-more`
);
const { path } = useImagePath({
  directory: props.label,
  image: props.item.image
});

function linkImgPath(image) {
  const { path } = useImagePath({
    directory: `${props.label}`,
    image: `logo/${image}`
  });

  return path.value;
}

function findOutMoreLink() {
  const link = ref(props.item?.link);
  const { randomNumber } = useRandomNumberGenerator({
    range: link.value.length
  });

  return Array.isArray(link.value)
    ? link.value[randomNumber.value].url
    : link.value;
}

function sendDialogCardClickAnalyticsEvent() {
  useGoogleAnalyticsEvent({
    action: `dialog-card:click`,
    category: props.label,
    label: props.item.title
  });
}

function sendFindOutMoreButtonClickAnalyticsEvent() {
  useGoogleAnalyticsEvent({
    action: `find-out-more-button:click`,
    category: props.label,
    label: props.item.title
  });
}
</script>

<style lang="scss" scoped src="./dialog-card-item.scss" />
