<template>
  <v-container
    :id="componentName"
    class="presentation-page py-16"
  >
    <CategoryTitle :component-name />

    <v-row
      align="center"
      justify="center"
      class="mt-8"
    >
      <!-- Text Content -->
      <v-col
        cols="12"
        md="7"
        lg="6"
        data-aos="fade-right"
      >
        <div class="glass-card pa-8 pa-md-12">
          <h2 class="text-h4 font-weight-bold mb-6 text-gradient">
            {{ $t('common.firstname') }} {{ $t('common.name') }}
          </h2>

          <div
            class="text-body-1 text-grey-lighten-1"
            style="line-height: 1.8;"
          >
            <i18n-t
              keypath="presentation.part-1"
              tag="p"
              class="mb-4"
              scope="global"
            >
              <template #name>
                <span class="font-weight-bold text-white">
                  {{ $t('common.firstname') }} {{ $t('common.name') }}
                </span>
              </template>
              <template #age>
                {{ useAge() }}
              </template>
            </i18n-t>

            <i18n-t
              keypath="presentation.part-2"
              tag="p"
              class="mb-4"
              scope="global"
            >
              <template #symfony>
                <a
                  href="https://symfony.com/"
                  class="text-primary text-decoration-none font-weight-medium"
                  target="_blank"
                >Symfony</a>
              </template>
              <template #nuxt>
                <a
                  href="https://nuxt.com/"
                  class="text-primary text-decoration-none font-weight-medium"
                  target="_blank"
                >Nuxt</a>
              </template>
            </i18n-t>

            <p class="mb-6">
              {{ $t('presentation.part-3') }}
            </p>
          </div>

          <div class="d-flex flex-wrap ga-4 mt-8">
            <PresentationPageButton
              v-for="(presentation, index) in presentations"
              :key="index"
              :presentation
            />
          </div>
        </div>
      </v-col>

      <!-- Visual/Image Column (could be added here later or just centered text for now if no image) -->
      <!-- Keeping it centered unique card for now as per design but cleaner -->
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import { useAge } from '@/composables/common/age'
import { useComponentName } from '@/composables/common/component-name'
import presentations from '@/data/fr/presentation'

import PresentationPageButton from './PresentationPageButton/PresentationPageButton.vue'

const componentName = useComponentName()
</script>

<style lang="scss" src="./presentation-page.scss" scoped />
