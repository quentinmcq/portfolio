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
import { useResponsive } from '@/composables/style/responsive'
import tool from '@/data/tools'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

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
