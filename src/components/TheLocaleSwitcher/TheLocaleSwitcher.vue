<template>
  <div class="locale-switcher" role="group" :aria-label="$t('languages.title')">
    <button
      v-for="lang in SUPPORTED_LOCALES"
      :key="lang"
      class="locale-switcher__btn"
      :class="{ 'is-active': locale === lang }"
      type="button"
      :lang
      :aria-pressed="locale === lang"
      :aria-label="LOCALE_NAMES[lang]"
      @click="switchLocale(lang)"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import {
  applyLocale,
  LOCALE_NAMES,
  LOCALE_STORAGE_KEY,
  SUPPORTED_LOCALES,
  type Locale
} from '@/i18n'

const { locale } = useI18n()

function switchLocale(lang: Locale) {
  if (locale.value === lang) {
    return
  }

  applyLocale(lang)

  localStorage.setItem(LOCALE_STORAGE_KEY, lang)
}
</script>

<style lang="scss" src="./the-locale-switcher.scss" scoped />
