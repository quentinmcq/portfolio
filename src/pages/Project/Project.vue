<template>
  <v-container :id="label" class="project">
    <CategoryTitle :label="label" />
    <DialogCard :items="allItems" :label="label" />

    <v-container class="project__wrapper">
      <v-btn
        v-show="hasMoreItems"
        :size="buttonSize"
        class="ma-3"
        color="#e52c4d"
        shaped
        @click="loadMore"
      >
        {{ $t('project.more-projects') }}
      </v-btn>
    </v-container>
  </v-container>
</template>

<script setup>
import DialogCard from '@/components/DialogCard/DialogCard.vue';
import { useDisplay } from 'vuetify';
import { useResponsive } from '@/composables/responsive';
import { computed, ref } from 'vue';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

const { xl } = useDisplay();
const { buttonSize } = useResponsive();

const label = ref('project');
const numberOfItemsToDisplay = ref(xl.value ? 4 : 2);
let displayedItems = ref(numberOfItemsToDisplay);

const allItems = computed(() => props.items.slice(0, displayedItems.value));
const hasMoreItems = computed(() => displayedItems.value < props.items.length);

function loadMore() {
  displayedItems.value += numberOfItemsToDisplay.value;
}
</script>

<style lang="scss" src="./project.scss" scoped />
