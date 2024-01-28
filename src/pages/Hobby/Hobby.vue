<template>
  <v-container :id="label">
    <category-title :label="label" />
    <dialog-card :items="allItems" :label="label" customButtonText />

    <see-more
      v-show="hasMoreItems"
      :items="items"
      :label="label"
      @see-more="setNumberOfItemsToDisplay"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';
import DialogCard from '@/components/DialogCard/DialogCard.vue';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';
import SeeMore from '@/components/DialogCard/SeeMore/SeeMore.vue';

interface Props {
  items: object[];
  label: string;
}

const props = defineProps<Props>();

const { lgAndUp } = useDisplay();

const DEFAULT_NUMBER_OF_ITEMS_TO_DISPLAY = lgAndUp.value ? 4 : 2;
const numberOfDisplayedItems = ref(DEFAULT_NUMBER_OF_ITEMS_TO_DISPLAY);

const allItems = computed(() =>
  props.items.slice(0, numberOfDisplayedItems.value)
);
const hasMoreItems = computed(
  () => numberOfDisplayedItems.value < props.items.length
);

function setNumberOfItemsToDisplay(number) {
  numberOfDisplayedItems.value += number;
}
</script>
