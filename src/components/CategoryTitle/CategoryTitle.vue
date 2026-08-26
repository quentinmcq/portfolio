<template>
  <header
    class="category-title"
    :class="{ 'category-title--center': center, 'category-title--wide': wide }"
  >
    <span class="category-title__rule" aria-hidden="true" />

    <div class="category-title__text">
      <h2 class="category-title__heading" data-reveal style="--reveal-shift: 40px">
        {{ heading }}
      </h2>

      <p v-if="kicker" class="category-title__kicker" data-reveal style="--reveal-delay: 90ms">
        {{ kicker }}
      </p>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const {
  center = false,
  componentName,
  wide = false
} = defineProps<{
  /** Centered heading — for full-bleed bands. */
  center?: boolean
  componentName: string
  /** Full-width heading with the kicker set on the right. */
  wide?: boolean
}>()

const { t, te } = useI18n()

const heading = computed(() => (componentName ? t(`${componentName}.main-title`) : ''))
const kicker = computed(() =>
  componentName && te(`${componentName}.kicker`) ? t(`${componentName}.kicker`) : ''
)
</script>

<style lang="scss" src="./category-title.scss" scoped />
