<template>
  <div
    v-if="loading"
    class="loading-bar"
  >
    <div
      v-for="cube in 4"
      :key="cube"
      class="cube"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const loading = ref(true)

onMounted(() => setTimeout(() => (loading.value = false), 1000))
</script>

<style lang="scss" src="./the-loading-bar.scss" scoped />
