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
            v-for="image in images[+year]"
            :key="image"
            cols="auto"
          >
            <GenericImage
              :key="image"
              class="image-animation image-gallery__rounded"
              @click="openImage(image)"
              :src="image"
              :alt="image"
              :width="dimensionGalleryImage"
              :height="dimensionGalleryImage"
              aspect-ratio="1"
              cover
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
        :src="clickedImagePath"
        :alt="clickedImagePath"
        :width="dimensionOpenImageWidth"
        :height="dimensionOpenImageHeight"
      />
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import GenericImage from '@/components/GenericImage/GenericImage.vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useDisplay } from 'vuetify'

const { type } = defineProps<{ type: string }>()

const dialog = ref(false)
const clickedImagePath = ref('')
const { xs } = useDisplay()

const dimensionOpenImageWidth = ref(0)
const dimensionOpenImageHeight = ref(0)
const glob = ref('')

switch (type) {
  case 'climbing':
    glob.value = import.meta.glob('@/assets/img/hobby/climbing/*/*.webp', { eager: true })
    break
  case 'manga':
    glob.value = import.meta.glob('@/assets/img/hobby/manga/*/*.webp', { eager: true })
    break
  default: glob.value = ''
}

const images = computed(() => {
  const result: Record<string, string[]> = {}

  Object.entries(glob.value).forEach(([path]) => {
    const year: string = path.split('/').at(-2) ?? ''

    result[year] ||= []
    result[year].push(path)
  })

  return result
})

onMounted(() => {
  calculateMaxDimensionOpenImage()
  window.addEventListener('resize', calculateMaxDimensionOpenImage)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateMaxDimensionOpenImage)
})

const dimensionGalleryImage = computed(() => (xs.value ? 110 : 160))
const reversedYears = computed(() => Object.keys(images.value).sort().reverse())

function calculateMaxDimensionOpenImage(): void {
  const { innerHeight, innerWidth } = window
  const isScreenNarrow = innerWidth < innerHeight
  const maxImageDimension = Math.min(innerWidth, innerHeight) * 0.9
  const imageRatio = innerWidth / innerHeight

  dimensionOpenImageWidth.value = Math.floor(isScreenNarrow ? maxImageDimension : maxImageDimension * imageRatio)
  dimensionOpenImageHeight.value = Math.floor(isScreenNarrow ? maxImageDimension / imageRatio : maxImageDimension)
}

function openImage(path: string): void {
  clickedImagePath.value = path
  dialog.value = true
}
</script>

<style scoped lang="scss" src="./image-gallery.scss" />
