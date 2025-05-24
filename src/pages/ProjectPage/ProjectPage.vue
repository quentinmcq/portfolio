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
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDisplay } from 'vuetify'

import SeeMore from '@/components//DialogCard/SeeMore/SeeMore.vue'
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import DialogCard from '@/components/DialogCard/DialogCard.vue'
import { useComponentName } from '@/composables/common/component-name'

const componentName = useComponentName()

const { lgAndUp } = useDisplay()
const numberOfItemsToDisplay = lgAndUp.value ? 4 : 2
const displayedItems = ref(numberOfItemsToDisplay)

const { tm } = useI18n()
const projects = computed(() => tm('project.list'))
const allItems = computed(() => projects.value.slice(0, displayedItems.value))
const hasMoreItems = computed(() => displayedItems.value < projects.value.length)

function setNumberOfItemsToDisplay(itemsNumber: number): void {
  displayedItems.value += itemsNumber
}
</script>
