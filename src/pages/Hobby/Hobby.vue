<template>
  <v-container :id="label">
    <CategoryTitle :label="label" />
    <DialogCard :items="items" :label="label" customButtonText />
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import DialogCard from '@/components/DialogCard/DialogCard.vue';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';

const label = ref('hobby');

defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>
