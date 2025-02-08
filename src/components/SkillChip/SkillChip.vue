<template class="skill-chip">
  <v-chip
    class="skill-chip__config"
    :color="color ?? chipConfig.color"
    :size="chipSize"
    :href="chipConfig.link"
  >
    <template
      #prepend
      v-if="chipConfig.icon"
    >
      <GenericImage
        :src="path"
        :alt="chipConfig.label"
        :width
        :height
      />
    </template>
    <div class="ml-1">
      {{ chipConfig.label }}
    </div>
  </v-chip>
</template>

<script setup lang="ts">
import GenericImage from '@/components/GenericImage/GenericImage.vue'
import { useImagePath } from '@/composables/common/image-path.js'
import { useResponsive } from '@/composables/style/responsive'
import tool from '@/data/tools'
import { computed } from 'vue'

const { color = undefined, label } = defineProps<{
  color?: string
  label: string
}>()

const { chipSize } = useResponsive()

const chipConfig = computed(() => {
  const labelLowercase = label.toLowerCase()
  const config = tool[labelLowercase]

  if (config) return config

  return {
    color: '',
    label,
    link: '',
  }
})

const { path } = useImagePath({
  directory: 'skill',
  image: `icons/${chipConfig.value.icon}`,
})

const width = computed(() => chipConfig.value.width ?? 15)
const height = computed(() => chipConfig.value.height ?? 15)
</script>

<style lang="scss" src="./skill-chip.scss" scoped />
