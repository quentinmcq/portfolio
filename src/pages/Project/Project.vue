<template>
  <v-container :id="label" class="project">
    <CategoryTitle :label="label" />
    <DialogCard :items="allItems" :label="label" />

    <SeeMore v-show="hasMoreItems" :items="items" @see-more="setNumberOfItemsToDisplay" />
  </v-container>
</template>

<script setup>
import DialogCard from '@/components/DialogCard/DialogCard.vue';
import { computed, ref } from 'vue';
import { useDisplay } from 'vuetify';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';
import SeeMore from '@/components//DialogCard/SeeMore/SeeMore.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

const { xl } = useDisplay();

const label = ref('project');
const numberOfItemsToDisplay = xl.value ? 4 : 2;
let displayedItems = ref(numberOfItemsToDisplay);

const allItems = computed(() => props.items.slice(0, displayedItems.value));
const hasMoreItems = computed(() => displayedItems.value < props.items.length);

function setNumberOfItemsToDisplay(event) {
  displayedItems.value += event;
}
</script>
