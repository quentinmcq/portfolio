<template>
  <component
    :is="chipConfig.link ? 'a' : 'span'"
    :href="chipConfig.link || undefined"
    :target="chipConfig.link ? '_blank' : undefined"
    :rel="chipConfig.link ? 'noopener' : undefined"
    class="skill-chip"
    :style="dotStyle"
  >
    <span
      class="skill-chip__dot"
      aria-hidden="true"
    />
    <span class="skill-chip__label">{{ chipConfig.label }}</span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import tool from '@/data/tools'

const { label } = defineProps<{
  label: string
}>()

const chipConfig = computed(() => {
  return tool[label.toLowerCase()] ?? { color: '', label, link: '' }
})

const dotStyle = computed(() => ({
  '--chip-color': chipConfig.value.color || 'var(--fg-muted)',
}))
</script>

<style lang="scss" src="./skill-chip.scss" scoped />
