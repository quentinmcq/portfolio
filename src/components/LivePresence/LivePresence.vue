<template>
  <Transition name="presence">
    <div v-if="connected && count > 0" class="presence" role="status">
      <span class="presence__dot" aria-hidden="true" />
      <span class="presence__label">{{ $t('presence.online', { count }) }}</span>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { usePresence } from '@/composables/presence'

const { count, connected } = usePresence()
</script>

<style lang="scss" src="./live-presence.scss" scoped />
