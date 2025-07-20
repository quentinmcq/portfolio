<template>
  <div class="rotate-device">
    <div class="phone" />
    <div class="message">
      {{ t('common.rotate-device') }}
    </div>
  </div>
</template>

<style lang="scss" src="./rotate-device.scss" />

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
