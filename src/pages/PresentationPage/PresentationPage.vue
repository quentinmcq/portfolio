<template>
  <v-container
    :id="componentName"
    class="presentation-page"
    fluid
  >
    <CategoryTitle :component-name />

    <v-row
      align="center"
      justify="center"
      data-aos="fade-up"
    >
      <v-col
        cols="12"
        md="12"
        lg="10"
      >
        <v-card class="presentation-page__card glass-card pa-8">
          <div class="d-flex flex-column flex-md-row align-center">
            <!-- Left: Avatar / Visual (Placeholder) -->
            <div class="presentation-page__avatar mb-6 mb-md-0 mr-md-8">
              <v-avatar
                size="150"
                color="secondary"
                variant="outlined"
                class="elevation-10"
              >
                <v-icon
                  icon="mdi-account-tie"
                  size="80"
                  color="white"
                />
              </v-avatar>
            </div>

            <!-- Right: Bio Content -->
            <div class="presentation-page__content text-center text-md-left flex-1-1-100">
              <h3 class="text-h3 font-weight-bold text-white mb-4">
                {{ $t('header.intro') }}
                <span class="text-primary">{{ $t('common.firstname') }}</span>
              </h3>

              <div class="text-h6 text-grey-lighten-1 mb-6">
                <i18n-t
                  keypath="presentation.part-1"
                  tag="p"
                  class="mb-2"
                  scope="global"
                >
                  <template #name>
                    <strong class="text-primary">{{ $t('common.firstname') }}</strong>
                  </template>
                  <template #age>
                    {{ useAge() }}
                  </template>
                </i18n-t>

                <i18n-t
                  keypath="presentation.part-2"
                  tag="p"
                  class="mb-2"
                  scope="global"
                >
                  <template #symfony>
                    <span class="text-secondary font-weight-bold">{{ $t('common.symfony') }}</span>
                  </template>
                  <template #nuxt>
                    <span class="text-secondary font-weight-bold">{{ $t('common.nuxt') }}</span>
                  </template>
                </i18n-t>

                <p>{{ $t('presentation.part-3') }}</p>
              </div>

              <!-- Social Buttons -->
              <div class="d-flex justify-center justify-md-start gap-4">
                <PresentationPageButton
                  v-for="(presentation, index) in presentations"
                  :key="index"
                  :presentation
                />
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
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
