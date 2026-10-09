<template>
  <section
    id="top"
    class="hero"
    :class="{ 'hero--full-moon': fullMoon }"
    :aria-label="$t('header.aria-hero')"
  >
    <AsciiBackdrop :moon="fullMoon" />

    <div class="container hero__container">
      <div class="hero__main">
        <h1 class="hero__title">
          <span class="hero__title-line hero-enter" style="--enter-delay: 80ms">
            <span
              class="hero__ears-host"
              :class="{ 'hero__ears-host--howl': howling }"
              @pointerup="onTap"
            >
              <span class="hero__ears" aria-hidden="true">
                <svg viewBox="0 0 100 44" fill="currentColor">
                  <g class="hero__ear hero__ear--left">
                    <path
                      d="M4 44Q0 40 2 35Q4 37 6 36Q2 31 4 26Q7 28 9 27Q6 23 8 18Q10 20 12 18C14 12 16 8 18 6Q21 2 24 6C29 13 34 23 38 33Q36 36 37 38Q40 38 41 40L42 44Z"
                    />
                    <path
                      class="hero__ear-inner"
                      d="M13 38C15 31 18 24 21 18Q23 15 25 18C28 24 31 31 33 38Z"
                    />
                    <path
                      d="M14 44Q15 36 18 30Q18 35 20 39Q20 31 22 24Q23 31 24 38Q25 33 27 29Q27 35 29 39Q30 36 32 33Q32 39 33 44Z"
                    />
                  </g>
                  <g class="hero__ear hero__ear--right">
                    <path
                      d="M96 44Q100 40 98 35Q96 37 94 36Q98 31 96 26Q93 28 91 27Q94 23 92 18Q90 20 88 18C86 12 84 8 82 6Q79 2 76 6C71 13 66 23 62 33Q64 36 63 38Q60 38 59 40L58 44Z"
                    />
                    <path
                      class="hero__ear-inner"
                      d="M87 38C85 31 82 24 79 18Q77 15 75 18C72 24 69 31 67 38Z"
                    />
                    <path
                      d="M86 44Q85 36 82 30Q82 35 80 39Q80 31 78 24Q77 31 76 38Q75 33 73 29Q73 35 71 39Q70 36 68 33Q68 39 67 44Z"
                    />
                  </g>
                </svg>
              </span>
              {{ $t('common.firstname') }}
            </span>
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
import { useWerewolf } from '@/composables/werewolf'

const { fullMoon, howl, howling } = useWerewolf()

function onTap(e: PointerEvent) {
  if (e.pointerType !== 'mouse') howl()
}
</script>

<style lang="scss" src="./the-header.scss" scoped />
