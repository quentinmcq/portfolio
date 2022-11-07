<template>
  <v-container class="see-more">
    <v-btn :size="buttonSize" class="ma-3" color="#e52c4d" shaped @click="loadMore">
      {{ $t('common.see-more') }}
    </v-btn>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import { useResponsive } from '@/composables/responsive';

defineProps({
  items: {
    type: Array,
    default: () => []
  }
});

const { xl } = useDisplay();
const { buttonSize } = useResponsive();

const emit = defineEmits(['see-more']);
const numberOfItemsToDisplay = xl.value ? 4 : 2;

function loadMore() {
  emit('see-more', numberOfItemsToDisplay);
}
</script>

<style lang="scss" src="./see-more.scss" scoped />
