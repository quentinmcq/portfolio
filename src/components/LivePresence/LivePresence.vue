<template>
  <Transition name="presence">
    <div v-if="connected && count > 0" class="presence" :class="{ 'is-hidden': hidden }">
      <span class="presence__dot" aria-hidden="true" />
      <span class="presence__count">{{ count }}</span>
      <span class="presence__label">{{ $t('presence.label') }}</span>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { usePresence } from '@/composables/presence'
import { useScrollHide } from '@/composables/scroll-hide'

const { count, connected } = usePresence()
const { hidden } = useScrollHide()
</script>

<style lang="scss" src="./live-presence.scss" scoped />
