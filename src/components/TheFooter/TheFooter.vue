<template>
  <footer class="footer">
    <div class="container footer__inner">
      <span class="footer__caption">{{ $t('footer.copyright', { currentYear }) }}</span>

      <a class="footer__link" :href="sourceUrl" target="_blank" rel="noopener">
        <span>{{ $t('footer.source') }}</span>
        <svg
          aria-hidden="true"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { repoUrl } from '@/data/contacts'

const currentYear = computed(() => new Date().getFullYear())
const sourceUrl = repoUrl('portfolio')
</script>

<style lang="scss" scoped src="./the-footer.scss" />
