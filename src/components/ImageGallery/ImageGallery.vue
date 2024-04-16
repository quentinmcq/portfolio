<template>
  <v-row class="image-gallery">
    <div
      v-for="year in reversedYears"
      :key="year"
      class="image-gallery__wrapper"
    >
      <v-col>
        <v-card-title class="image-gallery__year">
          {{ year }}
        </v-card-title>

        <div class="image-gallery__img-wrapper">
          <v-col
            v-for="image in images[year]"
            :key="image"
            cols="auto"
          >
            <GenericImage
              :key="image"
              class="image-animation image-gallery__rounded"
              @click="openImage(year, image)"
              :src="linkImgPath(year, image)"
              :alt="image"
              :width="dimensionGalleryImage"
              :height="dimensionGalleryImage"
              aspect-ratio="1"
              cover
              eager
            />
          </v-col>
        </div>
      </v-col>
    </div>
  </v-row>

  <div v-if="clickedImagePath">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <GenericImage
        @click="dialog = false"
        :src="linkImgPath(clickedYear, clickedImagePath)"
        :alt="clickedImagePath"
        :width="dimensionOpenImageWidth"
        :height="dimensionOpenImageHeight"
        eager
      />
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import GenericImage from '@/components/GenericImage/GenericImage.vue'
import { useImagePath } from '@/composables/common/image-path'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useDisplay } from 'vuetify'

const props = defineProps<{
  componentName: string
  images: object
  type: string
}>()

const dialog = ref(false)
const clickedImagePath = ref('')
const clickedYear = ref('')
const { xs } = useDisplay()

const dimensionOpenImageWidth = ref(0)
const dimensionOpenImageHeight = ref(0)

onMounted(() => {
  calculateMaxDimensionOpenImage()
  window.addEventListener('resize', calculateMaxDimensionOpenImage)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateMaxDimensionOpenImage)
})

const dimensionGalleryImage = computed(() => (xs.value ? 110 : 160))
const reversedYears = computed(() => Object.keys(props.images).reverse())

function calculateMaxDimensionOpenImage(): void {
  const maxSizeRatio = 0.9
  const { innerHeight: screenHeight, innerWidth: screenWidth } = window
  const isScreenNarrow = screenWidth < screenHeight

  const maxDimension = isScreenNarrow ? screenWidth : screenHeight
  const maxImageDimension = maxDimension * maxSizeRatio
  const imageRatio = screenWidth / screenHeight

  let maxWidth = maxImageDimension
  let maxHeight = maxImageDimension / imageRatio

  if (!isScreenNarrow && maxImageDimension < screenHeight) {
    maxWidth = maxImageDimension * imageRatio
    maxHeight = maxImageDimension
  }

  dimensionOpenImageWidth.value = Math.floor(maxWidth)
  dimensionOpenImageHeight.value = Math.floor(maxHeight)
}

function linkImgPath(year: string, image: string): string {
  const { path } = useImagePath({
    directory: `${props.componentName}`,
    image: `${props.type}/${year}/${image}`,
  })

  return path.value
}

function openImage(year: string, path: string): void {
  clickedImagePath.value = path
  clickedYear.value = year

  dialog.value = true
}
</script>

<style scoped lang="scss" src="./image-gallery.scss" />
