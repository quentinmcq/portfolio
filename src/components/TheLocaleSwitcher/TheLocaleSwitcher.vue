<template>
  <div class="locale-switcher">
    <v-menu
      bottom
      offset-y
      transition="slide-y-transition"
      rounded="md"
    >
      <template #activator="{ props }">
        <v-btn
          variant="text"
          class="text-body-2"
          v-bind="props"
          aria-label="Choix de la langue"
        >
          <v-icon
            color="white"
            icon="mdi-translate"
            class="mr-1"
          />
          <v-icon
            color="white"
            class="hidden-sm-and-down"
            size="14"
            icon="mdi-chevron-down"
          />
        </v-btn>
      </template>

      <v-list
        nav
        density="compact"
        width="108"
        class="text-center"
      >
        <v-list-item-subtitle class="locale-switcher__label">
          {{ $t('languages.title') }}
        </v-list-item-subtitle>

        <v-list-item
          class="locale-switcher__item"
          v-model="selectedLocaleIndex"
          v-for="availableLocale in availableLocales"
          :key="availableLocale"
          @click="switchLocale(availableLocale)"
        >
          <v-list-item-title>
            {{ $t(`languages.${availableLocale}`) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { availableLocales, locale } = useI18n()
const selectedLocaleIndex = ref(1)

function storeLangToLocalStorage(lang: string): void {
  localStorage.setItem('lang', lang)
}

function switchLocale(lang: string): void {
  if (locale.value !== lang) {
    availableLocales.reverse()
  }

  locale.value = lang
  storeLangToLocalStorage(lang)
}
</script>

<style lang="scss" src="./the-locale-switcher.scss" scoped />
