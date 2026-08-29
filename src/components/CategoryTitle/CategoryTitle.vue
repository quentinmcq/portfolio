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
  section,
  wide = false
} = defineProps<{
  center?: boolean
  section: string
  wide?: boolean
}>()

const { t, te } = useI18n()

const heading = computed(() => t(`${section}.main-title`))
const kicker = computed(() => (te(`${section}.kicker`) ? t(`${section}.kicker`) : ''))
</script>

<style lang="scss" src="./category-title.scss" scoped />
