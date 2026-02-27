<template>
  <v-container
    fluid
    class="header"
  >
    <v-row
      align="center"
      class="fill-height"
      justify="center"
    >
      <!-- Left: Text Content -->
      <v-col
        class="header__content pl-md-16"
        cols="12"
        md="7"
      >
        <div class="header__intro mb-2">
          {{ $t('header.intro') }}
        </div>

        <h1 class="header__title">
          {{ $t('common.firstname') }}
          <span class="header__name">{{ $t('common.name') }}</span>
        </h1>

        <div class="header__role mt-4 mb-8">
          <VueWriter
            :array="[$t('header.developer')]"
            :type-speed="80"
            :erase-speed="50"
            :intervals="200"
            :delay="2000"
          />
        </div>

        <div class="header__actions">
          <v-btn
            color="primary"
            class="mr-4 header__btn"
            size="x-large"
            @click="scrollToSection('#project-page')"
          >
            {{ $t('header.view_work') }}
            <v-icon
              end
              icon="mdi-arrow-right"
            />
          </v-btn>

          <v-btn
            variant="outlined"
            color="white"
            class="header__btn"
            size="x-large"
            @click="scrollToSection('#contact-page')"
          >
            {{ $t('contact.main-title') }}
          </v-btn>
        </div>
      </v-col>

      <!-- Right: Visual -->
      <v-col
        cols="12"
        md="5"
        class="d-none d-md-flex justify-center align-center"
      >
        <div class="header__visual glass-card">
          <v-icon
            icon="mdi-code-braces"
            color="primary"
            size="120"
            class="header__icon-glow"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import VueWriter from '@/components/VueWriter/VueWriter.vue'

function scrollToSection(selector: string) {
  const el = document.querySelector(selector)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style lang="scss" src="./the-header.scss" scoped />
