<template>
  <section :id="componentName" class="section contact">
    <div class="container spread">
      <CategoryTitle class="spread__head" :component-name />

      <div class="spread__body">
        <a class="contact__email" :href="`mailto:${CONTACTS.email}`" data-reveal>
          <span>{{ CONTACTS.email }}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>

        <ul
          class="contact__channels"
          :aria-label="$t('contact.channels')"
          data-reveal
          style="--reveal-delay: 80ms"
        >
          <li>
            <a class="contact__channel" :href="CONTACTS.linkedin" target="_blank" rel="noopener">
              <span class="contact__channel-key">LinkedIn</span>
              <span class="contact__channel-val">{{ CONTACTS.linkedinHandle }}</span>
            </a>
          </li>
          <li>
            <a class="contact__channel" :href="CONTACTS.github" target="_blank" rel="noopener">
              <span class="contact__channel-key">GitHub</span>
              <span class="contact__channel-val">{{ CONTACTS.githubHandle }}</span>
            </a>
          </li>
          <li>
            <span class="contact__channel">
              <span class="contact__channel-key">{{ $t('contact.where') }}</span>
              <span class="contact__channel-val">{{ $t('header.meta-location') }}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import { CONTACTS } from '@/data/contacts'

const componentName = 'contact'
</script>

<style lang="scss" src="./contact-section.scss" scoped />
