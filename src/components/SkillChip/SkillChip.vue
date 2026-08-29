<template>
  <component
    :is="chipConfig.link ? 'a' : 'span'"
    :href="chipConfig.link || undefined"
    :target="chipConfig.link ? '_blank' : undefined"
    :rel="chipConfig.link ? 'noopener' : undefined"
    class="skill-chip"
    :class="{ 'skill-chip--lg': size === 'lg' }"
    :style="dotStyle"
  >
    <span class="skill-chip__dot" aria-hidden="true" />
    <span class="skill-chip__label">{{ chipConfig.label }}</span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import tools from '@/data/tools'

const { label, size = 'md' } = defineProps<{
  label: string
  size?: 'lg' | 'md'
}>()

const chipConfig = computed(() => {
  return tools[label.toLowerCase()] ?? { color: '', label, link: '' }
})

const dotStyle = computed(() => ({
  '--chip-color': chipConfig.value.color || 'var(--fg-muted)'
}))
</script>

<style lang="scss" src="./skill-chip.scss" scoped />
