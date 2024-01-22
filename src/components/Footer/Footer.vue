<template>
  <v-footer class="footer" theme="dark">
    <v-col class="footer__credit" cols="12">
      <div class="footer__information">
        <div class="footer__credit-message">
          {{ $t('footer.credit') }}
        </div>
        <div class="footer__copyright">
          {{ $t('footer.copyright', { currentYear }) }}
        </div>
      </div>

      <v-chip
        class="footer__version"
        color="#e52c4d"
        theme="dark"
        :size="chipSize"
      >
        {{ version }}
      </v-chip>
    </v-col>
  </v-footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useResponsive } from '@/composables/responsive';
import { version } from '../../../package.json';

const { chipSize } = useResponsive();

const currentYear = computed(() => new Date().getFullYear());
</script>

<style lang="scss" src="./footer.scss" scoped />
