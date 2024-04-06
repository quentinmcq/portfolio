<template>
  <v-layout>
    <v-footer
      class="footer"
      theme="dark"
    >
      <v-col
        class="footer__credit"
        cols="12"
      >
        <div class="footer__information">
          <div class="footer__credit-message">
            {{ $t('footer.credit') }}
          </div>
          <div class="footer__copyright">
            {{ $t('footer.copyright', { currentYear }) }}
          </div>
          <div
            class="footer__recaptcha"
            v-html="$t('footer.recaptcha')"
          />
        </div>
      </v-col>
    </v-footer>
  </v-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped src="./the-footer.scss" />
