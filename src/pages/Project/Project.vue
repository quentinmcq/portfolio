<template>
  <v-container :id="label" class="project">
    <category-title :label="label" />
    <dialog-card :items="allItems" :label="label" />

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
import SeeMore from '@/components//DialogCard/SeeMore/SeeMore.vue';
import type { Project } from '@/types/Project';

interface Props {
  items: Project[]
}

const props = defineProps<Props>();

const { lgAndUp } = useDisplay();

const label = ref('project');
const numberOfItemsToDisplay = lgAndUp.value ? 4 : 2;
let displayedItems = ref(numberOfItemsToDisplay);

const allItems = computed(() => props.items.slice(0, displayedItems.value));
const hasMoreItems = computed(() => displayedItems.value < props.items.length);

function setNumberOfItemsToDisplay(number) {
  displayedItems.value += number;
}
</script>
