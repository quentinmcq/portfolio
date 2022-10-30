<template>
  <v-row>
    <DialogCardItem
      v-for="(item, index) in items"
      :key="index"
      :chips="item?.chips"
      :custom-button-text="customButtonText"
      :index="index"
      :item="item"
      :label="label"
      :transition="transition"
    />
  </v-row>
</template>

<script setup>
import DialogCardItem from '@/components/DialogCard/DialogCardItem/DialogCardItem.vue';

defineProps({
  items: {
    type: Array,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  customButtonText: {
    type: Boolean,
    required: false,
    default: null
  },
  transition: {
    type: String,
    required: false,
    default: 'dialog-bottom-transition'
  }
});
</script>
