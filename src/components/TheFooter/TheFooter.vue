<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__top">
        <div class="footer__brand">
          <span class="footer__brand-name">Quentin Macq.</span>
          <span class="footer__brand-tag">{{ $t('header.role') }} · {{ $t('header.meta-location') }}</span>
        </div>

        <div
          class="footer__links"
          aria-label="Footer links"
        >
          <a
            class="footer__link"
            :href="linkedinUrl"
            target="_blank"
            rel="noopener"
          >
            <span>LinkedIn</span>
            <svg
              aria-hidden="true"
              width="11"
              height="11"
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
          <a
            class="footer__link"
            :href="githubUrl"
            target="_blank"
            rel="noopener"
          >
            <span>GitHub</span>
            <svg
              aria-hidden="true"
              width="11"
              height="11"
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
          <a
            class="footer__link"
            :href="`mailto:${CONTACTS.email}`"
          >
            <span>Email</span>
            <svg
              aria-hidden="true"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
              />
              <path d="m3 8 9 5 9-5" />
            </svg>
          </a>
        </div>
      </div>

      <div
        class="footer__rule"
        aria-hidden="true"
      />

      <div class="footer__bottom">
        <span class="footer__caption">{{ $t('footer.copyright', { currentYear }) }}</span>
        <span class="footer__caption footer__caption--muted">{{ $t('footer.tools') }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { CONTACTS } from '@/data/contacts'

const currentYear = computed(() => new Date().getFullYear())
const { github: githubUrl, linkedin: linkedinUrl } = CONTACTS
</script>

<style lang="scss" scoped src="./the-footer.scss" />
