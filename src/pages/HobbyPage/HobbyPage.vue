<template>
  <v-container :id="componentName">
    <CategoryTitle :component-name />
    <DialogCard
      :items="allItems"
      :component-name
      custom-button-text
    />

    <SeeMore
      v-show="hasMoreItems"
      :component-name
      @see-more="setNumberOfItemsToDisplay"
    />
  </v-container>
</template>

<script setup lang="ts">
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import DialogCard from '@/components/DialogCard/DialogCard.vue'
import SeeMore from '@/components/DialogCard/SeeMore/SeeMore.vue'
import { useComponentName } from '@/composables/common/component-name'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDisplay } from 'vuetify'

const componentName = useComponentName()
const { lgAndUp } = useDisplay()

const DEFAULT_NUMBER_OF_ITEMS_TO_DISPLAY = lgAndUp.value ? 4 : 2
const numberOfDisplayedItems = ref(DEFAULT_NUMBER_OF_ITEMS_TO_DISPLAY)

const { tm } = useI18n()
const hobbies = computed(() => tm('hobby.list'))
const allItems = computed(() => hobbies.value.slice(0, numberOfDisplayedItems.value))
const hasMoreItems = computed(() => numberOfDisplayedItems.value < hobbies.value.length)

function setNumberOfItemsToDisplay(itemsNumber: number): void {
  numberOfDisplayedItems.value += itemsNumber
}
</script>
