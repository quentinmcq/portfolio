<template>
  <div class="category-title">
    {{ $t(`${label}.main-title`) }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
}

defineProps<Props>();
</script>

<style lang="scss" src="./category-title.scss" scoped />
