<template>
  <section id="contact" class="section contact">
    <div class="container spread">
      <CategoryTitle class="spread__head" section="contact" />

      <div class="spread__body">
        <a class="contact__email" :href="`mailto:${CONTACTS.email}`" data-reveal>
          <span>{{ CONTACTS.email }}</span>
          <ArrowIcon :stroke-width="1.4" />
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
import ArrowIcon from '@/components/ArrowIcon/ArrowIcon.vue'
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import { CONTACTS } from '@/data/contacts'
</script>

<style lang="scss" src="./contact-section.scss" scoped />
