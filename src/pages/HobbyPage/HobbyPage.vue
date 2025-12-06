<template>
  <v-container
    fluid
    :id="componentName"
    class="py-16"
  >
    <CategoryTitle :component-name />

    <div class="d-flex flex-wrap justify-center gap-6 mt-12 px-4">
      <div
        v-for="(item, index) in allItems"
        :key="index"
        class="glass-card pa-6 text-center d-flex flex-column align-center justify-center hover-scale"
        style="width: 300px; height: 300px; cursor: pointer;"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >
        <div
          style="width: 120px; height: 120px;"
          class="mb-4 rounded-circle overflow-hidden elevation-10 border-thin"
        >
          <GenericImage
            v-if="item.cover"
            :src="getImagePath(item.cover)"
            :lazy-src="getImagePath(item.cover)"
            :alt="item.title"
            height="100%"
            width="100%"
            cover
          />
        </div>

        <h3 class="text-h5 font-weight-bold text-white mb-2">
          {{ item.title }}
        </h3>
        <p class="text-body-2 text-grey-lighten-1">
          {{ item.description }}
        </p>
      </div>

      <!-- See More Button Wrapper -->
      <div
        v-if="hasMoreItems"
        class="d-flex align-center justify-center"
        style="width: 300px; height: 300px;"
      >
        <v-btn
          icon="mdi-plus"
          size="x-large"
          variant="outlined"
          color="white"
          class="glass-chip"
          @click="setNumberOfItemsToDisplay(4)"
        />
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import GenericImage from '@/components/GenericImage/GenericImage.vue'
import { useComponentName } from '@/composables/common/component-name'

const componentName = 'hobby'
const { tm } = useI18n()

const numberOfDisplayedItems = ref(3)

const allItems = computed(() => {
  const list = tm('hobby.list')
  // Ensure we always return an array even if tm returns something else temporarily
  return Array.isArray(list) ? list.slice(0, numberOfDisplayedItems.value) : []
})

const hasMoreItems = computed(() => {
  const list = tm('hobby.list')
  return Array.isArray(list) && numberOfDisplayedItems.value < list.length
})

function getImagePath(imageName: string) {
  // Using direct path to public assets which works reliably in Vite
  return `/assets/img/hobby/${imageName}`
}

function setNumberOfItemsToDisplay(itemsNumber: number): void {
  numberOfDisplayedItems.value += itemsNumber
}
</script>

<style scoped>
.hover-scale {
  transition: transform 0.3s ease;
}
.hover-scale:hover {
  transform: scale(1.05);
}
.gap-6 {
  gap: 24px;
}
</style>
