<template>
  <v-snackbar
    v-model='snackbar'
    :timeout='infinite'
    class='snackbar'
    location='bottom left'
    multi-line
  >
    <a :href='link' class='snackbar__link_config' target='_blank'>{{
        $t('snackbar.information')
      }}</a>

    <template #actions>
      <v-btn color='#e52c4d' variant='text' @click='snackbar = false'>
        {{ $t('snackbar.close') }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const snackbar = ref(false);
const infinite = -1;
const link = 'https://quentin-macq-old.netlify.app';

onMounted(() => setTimeout(() => (snackbar.value = true), 2000));
</script>

<style lang='scss' scoped src='./snackbar.scss' />
