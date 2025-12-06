<template class="skill-chip">
  <v-chip
    :color="color ?? chipConfig.color"
    :size="chipSize"
    :href="chipConfig.link"
    variant="tonal"
    class="skill-chip__config font-weight-bold"
    :style="`box-shadow: 0 0 10px ${color ?? chipConfig.color}40`"
  >
    <template
      #prepend
      v-if="chipConfig.icon"
    >
      <Icon
        :icon="chipConfig.icon"
        :height="chipConfig.height"
      />
    </template>
    <div class="ml-1">
      {{ chipConfig.label }}
    </div>
  </v-chip>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

import { useResponsive } from '@/composables/style/responsive'
import tool from '@/data/tools'

const { color = undefined, label } = defineProps<{
  color?: string
  label: string
}>()

const { chipSize } = useResponsive()

const chipConfig = computed(() => {
  return tool[label.toLowerCase()] ?? { color: '', label, link: '' }
})
</script>

<style lang="scss" src="./skill-chip.scss" scoped />
