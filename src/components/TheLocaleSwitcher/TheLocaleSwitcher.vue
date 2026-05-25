<template>
  <div
    class="locale-switcher"
    role="group"
    :aria-label="$t('languages.title')"
  >
    <button
      v-for="lang in availableLocales"
      :key="lang"
      class="locale-switcher__btn"
      :class="{ 'is-active': currentLocale === lang }"
      :aria-pressed="currentLocale === lang"
      :aria-label="$t(`languages.${lang}`)"
      @click="switchLocale(lang)"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { LOCALE_STORAGE_KEY } from '@/i18n'

const { availableLocales, locale } = useI18n()

const currentLocale = computed(() => locale.value)

function switchLocale(lang: string) {
  if (locale.value === lang) return
  locale.value = lang
  document.documentElement.lang = lang
  localStorage.setItem(LOCALE_STORAGE_KEY, lang)
}
</script>

<style lang="scss" src="./the-locale-switcher.scss" scoped />
