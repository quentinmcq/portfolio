<template>
  <section
    id="top"
    class="hero"
    aria-label="Quentin Macq — Hero"
  >
    <div class="container hero__container">
      <div class="hero__top">
        <span class="hero__eyebrow">{{ $t('header.idx') }}</span>
        <span
          class="hero__rule"
          aria-hidden="true"
        />
        <span class="hero__eyebrow">{{ $t('header.edition', { year: currentYear }) }}</span>
      </div>

      <div class="hero__body">
        <div class="hero__main">
          <p
            class="hero__caption"
            data-reveal
            style="--reveal-delay: 80ms"
          >
            <span
              class="hero__caption-dot"
              aria-hidden="true"
            />
            {{ $t('header.available') }}
          </p>

          <h1 class="hero__title">
            <span
              class="hero__title-line"
              data-reveal
              style="--reveal-delay: 140ms"
            >
              {{ $t('common.firstname') }}
            </span>
            <span
              class="hero__title-line hero__title-line--accent"
              data-reveal
              style="--reveal-delay: 240ms"
            >
              {{ $t('common.name') }}<span class="hero__title-stop">.</span>
            </span>
          </h1>

          <p
            class="hero__lede"
            data-reveal
            style="--reveal-delay: 360ms"
          >
            {{ $t('header.lede') }}
          </p>

          <div
            class="hero__cta"
            data-reveal
            style="--reveal-delay: 520ms"
          >
            <a
              class="hero-btn hero-btn--primary"
              href="#project"
              @click.prevent="scrollTo('#project')"
            >
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
            <a
              class="hero-btn hero-btn--ghost"
              href="#contact"
              @click.prevent="scrollTo('#contact')"
            >
              <span>{{ $t('contact.main-title') }}</span>
            </a>
          </div>
        </div>

        <aside
          class="hero__aside"
          aria-label="Current focus"
        >
          <div
            class="hero__aside-block"
            data-reveal
            style="--reveal-delay: 320ms"
          >
            <span class="hero__aside-label">{{ $t('header.focus.shipping-label') }}</span>
            <span class="hero__aside-value">{{ $t('header.focus.shipping') }}</span>
          </div>
          <div
            class="hero__aside-block"
            data-reveal
            style="--reveal-delay: 420ms"
          >
            <span class="hero__aside-label">{{ $t('header.focus.open-label') }}</span>
            <span class="hero__aside-value">{{ $t('header.focus.open') }}</span>
          </div>
        </aside>
      </div>

      <div class="hero__bottom">
        <span
          class="hero__rule"
          aria-hidden="true"
        />
        <a
          class="hero__scroll"
          href="#skill"
          @click.prevent="scrollTo('#skill')"
        >
          <span>{{ $t('header.scroll') }}</span>
          <svg
            aria-hidden="true"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

function scrollTo(anchor: string) {
  document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style lang="scss" src="./the-header.scss" scoped />
