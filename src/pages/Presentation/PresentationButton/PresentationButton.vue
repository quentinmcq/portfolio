<template class="presentation-button">
  <v-btn
    class="presentation-button__config"
    theme="dark"
    :href="presentation.link"
    :target="target"
    :color="presentation.color"
    :size="buttonSize"
    :prepend-icon="icon"
  >
    {{ presentation.label }}
  </v-btn>
</template>

<script setup>
import { computed } from 'vue';
import { useResponsive } from '@/composables/responsive';

const props = defineProps({
  presentation: {
    type: Object,
    required: true
  }
});

const { buttonSize } = useResponsive();

const target = computed(() => (!props.presentation.link.startsWith('#') ? '_blank' : ''));
const icon = computed(() => (props.presentation.icon || ''));
</script>

<style scoped lang="scss" src="./presentation-button.scss" />
