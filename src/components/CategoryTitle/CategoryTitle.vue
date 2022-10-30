<template>
  <div class="category-title">
    {{ $t(`${label}.main-title`) }}
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
});
</script>

<style scoped lang="scss" src="./category-title.scss" />
