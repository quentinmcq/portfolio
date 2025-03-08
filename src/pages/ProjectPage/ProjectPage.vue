<template>
  <v-container
    :id="componentName"
    class="project"
  >
    <CategoryTitle :component-name />
    <DialogCard
      :items="allItems"
      :component-name
    />

    <SeeMore
      v-show="hasMoreItems"
      :component-name
      @see-more="setNumberOfItemsToDisplay"
    />
  </v-container>
</template>

<script setup lang="ts">
import SeeMore from '@/components//DialogCard/SeeMore/SeeMore.vue'
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import DialogCard from '@/components/DialogCard/DialogCard.vue'
import { useComponentName } from '@/composables/common/component-name'
import projects from '@/data/fr/project'
import { computed, ref } from 'vue'
import { useDisplay } from 'vuetify'

const componentName = useComponentName()

const { lgAndUp } = useDisplay()
const numberOfItemsToDisplay = lgAndUp.value ? 4 : 2
let displayedItems = ref(numberOfItemsToDisplay)

const allItems = computed(() => projects.slice(0, displayedItems.value))
const hasMoreItems = computed(() => displayedItems.value < projects.length)

function setNumberOfItemsToDisplay(itemsNumber: number): void {
  displayedItems.value += itemsNumber
}
</script>
