<template>
  <div class="locale-switcher">
    <v-menu bottom offset-y transition="slide-y-transition" rounded="md">
      <template #activator="{ props }">
        <v-btn color="#e52c4d" v-bind="props">
          <v-icon color="white" dense icon="mdi-translate" />
          <v-icon color="white" class="hidden-sm-and-down" size="14" icon="mdi-chevron-down" />
        </v-btn>
      </template>

      <v-list nav dense>
        <v-list-item-subtitle class="locale-switcher__label">
          {{ $t('translations.title') }}
        </v-list-item-subtitle>

        <v-list-item
          v-model="selectedLocale"
          v-for="locale in availableLocales"
          :key="locale"
          active-color="#e52c4d"
          @click="switchLocale(locale)"
          dense
        >
          <v-list-item-title>
            {{ $t(`translations.${locale}`) }}
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
const selectedLocale = ref(1);

function switchLocale(lang) {
  locale.value = lang;

  storeLangToLocalStorage(lang);
}

function storeLangToLocalStorage(lang) {
  localStorage.setItem('lang', lang);
}
</script>

<style lang="scss" src="./locale-switcher.scss" scoped />
