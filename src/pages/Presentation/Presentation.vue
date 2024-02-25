<template>
  <v-container :id="componentName" class="presentation">
    <CategoryTitle :component-name="componentName" />

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
                {{ useAge() }}
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
                  href="https://symfony.com"
                  class="presentation__link"
                  target="_blank"
                  rel="noopener"
                >
                  {{ $t('common.symfony') }}
                </a>
              </template>

              <template #vuejs>
                <a
                  href="https://vuejs.com"
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

<script setup lang="ts">
import { useAge } from '@/composables/common/age';
import presentations from '@/data/fr/presentation';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';
import PresentationButton from '@/pages/Presentation/PresentationButton/PresentationButton.vue';
import { useComponentName } from '@/composables/common/component-name';

const componentName = useComponentName();
</script>

<style lang="scss" src="./presentation.scss" scoped />
