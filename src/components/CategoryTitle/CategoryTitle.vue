<template>
  <header class="category-title">
    <div class="category-title__row">
      <span class="category-title__index">{{ index }}</span>
      <span
        class="category-title__rule"
        aria-hidden="true"
      />
      <a
        class="category-title__top"
        href="#top"
        :aria-label="$t('common.back-to-top')"
        @click.prevent="scrollToTop"
      >
        <span>{{ $t('common.back-to-top') }}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </a>
    </div>

    <h2
      class="category-title__heading"
      data-reveal
    >
      {{ heading }}
    </h2>

    <p
      v-if="kicker"
      class="category-title__kicker"
      data-reveal
      style="--reveal-delay: 80ms"
    >
      {{ kicker }}
    </p>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { componentName } = defineProps<{
  componentName: string
}>()

const { t, te } = useI18n()

const heading = computed(() => componentName ? t(`${componentName}.main-title`) : '')
const index = computed(() => componentName && te(`${componentName}.index`) ? t(`${componentName}.index`) : '')
const kicker = computed(() => componentName && te(`${componentName}.kicker`) ? t(`${componentName}.kicker`) : '')

function scrollToTop(): void {
  window.scrollTo({ behavior: 'smooth', top: 0 })
}
</script>

<style lang="scss" src="./category-title.scss" scoped />
