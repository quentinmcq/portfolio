<template>
  <ul class="tool-list" :class="`tool-list--${size}`">
    <li v-for="label in labels" :key="label" class="tool-list__item">
      <a
        class="tool-list__link"
        :href="tool(label).link || undefined"
        target="_blank"
        rel="noopener"
      >
        {{ tool(label).label }}
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import tools from '@/data/tools'

const { labels, size = 'sm' } = defineProps<{
  labels: string[]
  size?: 'lg' | 'sm'
}>()

function tool(label: string) {
  return tools[label.toLowerCase()] ?? { label, link: '' }
}
</script>

<style lang="scss" src="./tool-list.scss" scoped />
