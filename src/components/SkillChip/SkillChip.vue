<template class="skill-chip">
  <v-chip
    class="skill-chip__config"
    :color="color ?? chipConfig.color"
    :size="chipSize"
    :href="chipConfig.link"
  >
    <template #prepend v-if="chipConfig.icon">
      <Image
        :src="path"
        :alt="chipConfig.label"
        :width="width"
        :height="height"
        eager
      />
    </template>
    <div class="ml-1">{{ chipConfig.label }}</div>
  </v-chip>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useResponsive } from '@/composables/responsive';
import technology from '@/data/technology';
import Image from '@/components/Image/Image.vue';
import { useImagePath } from '@/composables/image-path.js';

interface Props {
  label: string;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: undefined
});

const { chipSize } = useResponsive();

const chipConfig = computed(() => {
  const label = props.label.toLowerCase();
  const config = technology[label];

  if (config) return config;

  return {
    label: props.label,
    color: '',
    link: ''
  };
});

const { path } = useImagePath({
  directory: 'skill',
  image: `icons/${chipConfig.value.icon}`
});

const width = computed(() => chipConfig.value.width ?? 15);
const height = computed(() => chipConfig.value.height ?? 15);
</script>

<style lang="scss" src="./skill-chip.scss" scoped />
