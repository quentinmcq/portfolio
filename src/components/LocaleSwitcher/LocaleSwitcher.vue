<template>
  <div class="locale-switcher">
    <v-menu bottom offset-y transition="slide-y-transition" rounded="md">
      <template #activator="{ props }">
        <v-btn color="#e52c4d" v-bind="props" aria-label="Choix de la langue">
          <v-icon color="white" dense icon="mdi-translate" />
          <v-icon
            color="white"
            class="hidden-sm-and-down"
            size="14"
            icon="mdi-chevron-down"
          />
        </v-btn>
      </template>

      <v-list nav density="compact" width="108" class="text-center">
        <v-list-item-subtitle class="locale-switcher__label">
          {{ $t('languages.title') }}
        </v-list-item-subtitle>

        <v-list-item
          class="locale-switcher__item"
          v-model="selectedLocaleIndex"
          v-for="locale in availableLocales"
          :key="locale"
          @click="switchLocale(locale)"
        >
          <v-list-item-title>
            {{ $t(`languages.${locale}`) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n();
const selectedLocaleIndex = ref(1);

function switchLocale(lang) {
  if (locale.value !== lang) {
    availableLocales.reverse();
  }

  locale.value = lang;
  storeLangToLocalStorage(lang);
}

function storeLangToLocalStorage(lang) {
  localStorage.setItem('lang', lang);
}
</script>

<style lang="scss" src="./locale-switcher.scss" scoped />
