<template class="chip-item">
  <v-chip class="chip-item__config" :color="chipColor" :size="chipSize">
    {{ label }}
  </v-chip>
</template>

<script setup>
import { computed } from 'vue';
import { useResponsive } from '@/composables/responsive';

const props = defineProps({
  label: {
    type: String,
    required: true
  }
});

const { chipSize } = useResponsive();

const chipColor = computed(() => {
  return {
    PHP: '#474A8A',
    JS: '#FF9B02',
    Python: '#306998',
    'HTML/CSS': '#2965f1',
    VueJS: '#41B883',
    Symfony: '#36393e',
    Laravel: '#F05340',
    React: '#61DBFB',
    Angular: '#B52E31',
    Docker: '#0162cc'
  }[props.label];
});
</script>

<style scoped lang="scss" src="./chip-item.scss" />
