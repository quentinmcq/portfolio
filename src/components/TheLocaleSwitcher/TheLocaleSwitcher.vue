<template>
  <div class="locale-switcher" role="group" :aria-label="$t('languages.title')">
    <a
      v-for="lang in SUPPORTED_LOCALES"
      :key="lang"
      class="locale-switcher__btn"
      :class="{ 'is-active': locale === lang }"
      :href="LOCALE_PATHS[lang]"
      :lang
      :aria-label="LOCALE_NAMES[lang]"
      :aria-current="locale === lang ? 'page' : undefined"
      @click="remember(lang)"
    >
      {{ lang.toUpperCase() }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import {
  LOCALE_NAMES,
  LOCALE_PATHS,
  LOCALE_STORAGE_KEY,
  SUPPORTED_LOCALES,
  type Locale
} from '@/i18n'

const { locale } = useI18n()

function remember(lang: Locale) {
  localStorage.setItem(LOCALE_STORAGE_KEY, lang)
}
</script>

<style lang="scss" src="./the-locale-switcher.scss" scoped />
