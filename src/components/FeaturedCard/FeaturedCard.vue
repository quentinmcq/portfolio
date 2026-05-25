<template>
  <article
    class="featured-card"
    data-reveal
  >
    <header class="featured-card__head">
      <span class="featured-card__eyebrow">{{ eyebrow }}</span>
      <span
        v-if="period"
        class="featured-card__period"
      >{{ period }}</span>
    </header>

    <div class="featured-card__body">
      <h3 class="featured-card__title">
        {{ title }}<span class="featured-card__stop">.</span>
      </h3>
      <p
        v-if="description"
        class="featured-card__description"
      >
        {{ description }}
      </p>
    </div>

    <div
      v-if="stack?.length"
      class="featured-card__stack"
    >
      <span
        v-if="stackLabel"
        class="featured-card__stack-label"
      >{{ stackLabel }}</span>
      <ul class="featured-card__stack-list">
        <li
          v-for="tech in stack"
          :key="tech"
        >
          <SkillChip :label="tech" />
        </li>
      </ul>
    </div>

    <div
      v-if="linkHref"
      class="featured-card__actions"
    >
      <a
        :href="linkHref"
        target="_blank"
        rel="noopener"
        class="featured-card__cta"
      >
        <span>{{ linkLabel }}</span>
        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import SkillChip from '@/components/SkillChip/SkillChip.vue'

const {
  description = undefined,
  eyebrow,
  linkHref = undefined,
  linkLabel = undefined,
  period = undefined,
  stack = undefined,
  stackLabel = undefined,
  title,
} = defineProps<{
  description?: string
  eyebrow: string
  linkHref?: string
  linkLabel?: string
  period?: string
  stack?: string[]
  stackLabel?: string
  title: string
}>()
</script>

<style lang="scss" src="./featured-card.scss" scoped />
