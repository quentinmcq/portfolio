<template>
  <v-row class="image-gallery">
    <v-col
      v-for="(image, index) of images"
      :key="index"
      class="d-flex child-flex"
      cols="4"
    >
      <Image
        class="image-animation image-gallery__rounded"
        @click="openImage(image.link)"
        :src="linkImgPath(image.link)"
        :alt="image.link"
        :max-height="setMaxHeight()"
        aspect-ratio="1"
        cover
        eager
      />
    </v-col>
  </v-row>

  <div class="text-center" v-if="clickedImagePath">
    <v-dialog v-model="dialog" width="auto">
      <Image
        @click="dialog = false"
        :src="linkImgPath(clickedImagePath)"
        :alt="clickedImagePath"
        max-width="850"
        max-height="650"
        eager
      />
    </v-dialog>
  </div>
</template>

<script setup>
import { useImagePath } from '../../../composables/image-path';
import { ref } from 'vue';
import Image from '../Image.vue';
import { useDisplay } from 'vuetify';

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  label: {
    type: String,
    required: true
  }
});

const dialog = ref(false);
const clickedImagePath = ref('');
const { xs } = useDisplay();

function linkImgPath(image) {
  const { path } = useImagePath({
    directory: `${props.label}`,
    image: `manga/${image}`
  });

  return path.value;
}

function openImage(path) {
  dialog.value = true;
  clickedImagePath.value = path;
}

function setMaxHeight() {
  return xs.value ? 80 : 230;
}
</script>

<style lang="scss" src="./image-gallery.scss" />
