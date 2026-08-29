<template>
  <footer class="footer">
    <div class="container footer__inner">
      <span class="footer__caption">{{ $t('footer.copyright', { currentYear }) }}</span>

      <a class="footer__link" :href="sourceUrl" target="_blank" rel="noopener">
        <span>{{ $t('footer.source') }}</span>
        <ArrowIcon :size="10" :stroke-width="1.8" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import ArrowIcon from '@/components/ArrowIcon/ArrowIcon.vue'
import { computed } from 'vue'

import { repoUrl } from '@/data/contacts'

const currentYear = computed(() => new Date().getFullYear())
const sourceUrl = repoUrl('portfolio')
</script>

<style lang="scss" scoped src="./the-footer.scss" />
