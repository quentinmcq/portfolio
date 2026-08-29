<template>
  <section id="hobby" class="section section--band hobby">
    <div class="container">
      <CategoryTitle section="hobby" center />

      <ul class="hobby__cards">
        <li
          v-for="(entry, index) in hobbies"
          :key="index"
          class="hobby__slot"
          data-reveal
          :style="{
            '--reveal-delay': `${index * 110}ms`,
            '--tilt': TILTS[index % TILTS.length],
            '--lift': LIFTS[index % LIFTS.length]
          }"
        >
          <article class="hobby-card" :class="{ 'hobby-card--linked': !!entry.link }">
            <h3 class="hobby-card__title">{{ entry.title }}</h3>
            <p class="hobby-card__description">{{ entry.description }}</p>

            <a
              v-if="entry.link"
              :href="entry.link"
              target="_blank"
              rel="noopener"
              class="hobby-card__link"
              :aria-label="entry.button"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
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
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import { useMessageList } from '@/composables/message-list'
import type { Hobby } from '@/types/Hobby'

const TILTS = ['-1.8deg', '1.3deg', '-0.9deg']
const LIFTS = ['0rem', '2.75rem', '1.25rem']

const hobbies = useMessageList<Hobby>('hobby.list')
</script>

<style lang="scss" src="./hobby-section.scss" scoped />
