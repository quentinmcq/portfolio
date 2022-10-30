<template>
  <v-col class="dialog-card-item" md="6">
    <div class="card-animation dialog-card-item__card-thumbnail">
      <v-card class="dialog-card-item__card-external" color="#f4f4f4">
        <div @click="dialog = true">
          <v-img :src="path" cover height="180" />

          <v-card-title class="pt-3">
            {{ $t(`${prefix}.title`) }}
            <span v-if="item.year">({{ item.year }})</span>
          </v-card-title>

          <v-card-text v-if="item.subtitle" style='max-width: 600px'>
            {{ $t(`${prefix}.subtitle`) }}
          </v-card-text>
        </div>
      </v-card>

      <v-dialog v-model="dialog" :transition="transition">
        <v-card class="dialog-card-item__card-internal" color="#f4f4f4">
          <div class="dialog-card-item__card-internal__cross-icon">
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
              <ChipItem v-for="(label, index) in chips" :key="index" :label="label" />
            </v-row>

            <v-row v-if="Array.isArray(item.link)" class="dialog-card-item__links">
              <v-col v-for="(link, index) in item.link" :key="index">
                <a :href="link.url" target="_blank">
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
              :href="websiteLink()"
              :size="buttonSize"
              color="#e52c4d"
              target="_blank"
              variant="outlined"
              @click="dialog = false"
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
import { useTranslate } from '@/composables/translate';
import { useRandomNumber } from '@/composables/random-number';
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
    required: false,
    default: null
  },
  customButtonText: {
    type: Boolean,
    required: false,
    default: null
  },
  transition: {
    type: String,
    required: false,
    default: 'dialog-bottom-transition'
  }
});

const link = ref(props.item?.link);

function websiteLink() {
  const { randomNumber } = useRandomNumber({ range: link.value.length });
  return Array.isArray(link.value) ? link.value[randomNumber.value].url : link.value;
}

const prefix = useTranslate(props.label, props.index);
const { buttonSize } = useResponsive();
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

let dialog = ref(false);
const buttonText = computed(() =>
  props.customButtonText ? `${prefix}.button` : `${props.label}.find-out-more`
);
</script>

<style lang="scss" scoped src="./dialog-card-item.scss" />
