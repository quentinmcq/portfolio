<template>
  <v-container :id="label" class="presentation">
    <category-title :label="label" />

    <v-row data-aos="zoom-in">
      <v-col>
        <v-card class="card-animation presentation__card-style">
          <div>
            <i18n-t
              keypath="presentation.part-1"
              tag="div"
              class="presentation__card-spacing"
              scope="global"
            >
              <template #name>
                <a
                  :href="presentations[0].link"
                  class="presentation__link"
                  target="_blank"
                  >{{ $t('common.firstname') }} {{ $t('common.name') }}
                </a>
              </template>

              <template #age>
                {{ age }}
              </template>
            </i18n-t>

            <i18n-t
              keypath="presentation.part-2"
              tag="div"
              class="presentation__card-spacing"
              scope="global"
            >
              <template #symfony>
                <a
                  :href="symfonyLink"
                  class="presentation__link"
                  target="_blank"
                  rel="noopener"
                >
                  {{ $t('common.symfony') }}
                </a>
              </template>

              <template #vuejs>
                <a
                  :href="vuejsLink"
                  class="presentation__link"
                  target="_blank"
                  rel="noopener"
                >
                  {{ $t('common.vuejs') }}</a
                >
              </template>
            </i18n-t>

            <div>
              {{ $t('presentation.part-3') }}
            </div>
          </div>

          <div class="presentation__wrapper-button" data-aos="fade-up">
            <PresentationButton
              v-for="(presentation, index) in presentations"
              :key="index"
              :presentation="presentation"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAge } from '@/composables/age';
import presentations from '@/data/fr/presentation.js';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';
import PresentationButton from '@/pages/Presentation/PresentationButton/PresentationButton.vue';

defineProps({
  label: {
    type: String,
    required: true
  }
});

const { age } = useAge();

const symfonyLink = 'https://symfony.com/';
const vuejsLink = 'https://vuejs.org/';
</script>

<style lang="scss" src="./presentation.scss" scoped />
