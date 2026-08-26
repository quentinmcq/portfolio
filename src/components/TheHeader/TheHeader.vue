<template>
  <section id="top" class="hero" :aria-label="$t('header.aria-hero')">
    <AsciiBackdrop />

    <div class="container hero__container">
      <div class="hero__main">
        <h1 class="hero__title">
          <span class="hero__title-line hero-enter" style="--enter-delay: 80ms">
            {{ $t('common.firstname') }}
          </span>
          <span
            class="hero__title-line hero__title-line--accent hero-enter"
            style="--enter-delay: 180ms"
          >
            {{ $t('common.name') }}<span class="hero__title-stop">.</span>
          </span>
        </h1>

        <p class="hero__lede hero-enter" style="--enter-delay: 300ms">
          {{ $t('header.lede') }}
        </p>

        <div class="hero__cta hero-enter" style="--enter-delay: 440ms">
          <a class="hero-btn hero-btn--primary" href="#project">
            <span>{{ $t('header.cta-work') }}</span>
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a class="hero-btn hero-btn--ghost" href="#contact">
            <span>{{ $t('contact.main-title') }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AsciiBackdrop from '@/components/AsciiBackdrop/AsciiBackdrop.vue'
</script>

<style lang="scss" src="./the-header.scss" scoped />
