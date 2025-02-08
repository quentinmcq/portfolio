<template>
  <div class="category-title">
    {{ categoryTitle }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { componentName } = defineProps<{
  componentName: string
}>()

const { t } = useI18n()

const categoryTitle = computed(() => componentName !== '' ? t(`${componentName}.main-title`) : '')
</script>

<style lang="scss" src="./category-title.scss" scoped />
