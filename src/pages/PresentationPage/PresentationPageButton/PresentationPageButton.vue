<template class="presentation-page-button">
  <v-btn
    class="presentation-page-button__config"
    theme="dark"
    :href="presentation.link"
    :target="target"
    :color="presentation.color"
    :size="buttonSize"
    :prepend-icon="icon"
    @click="sendEventOnButtonClick"
    data-aos="zoom-in"
    :aria-label="presentation.label"
  >
    {{ presentation.label }}
  </v-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGoogleAnalyticsEvent } from '@/composables/event/google-analytics';
import { useResponsive } from '@/composables/style/responsive';
import type { Presentation } from '@/types/Presentation';

const props = defineProps<{
  presentation: Presentation
}>();

const { buttonSize } = useResponsive();

const target = computed(() =>
  !props.presentation.link.startsWith('#') ? '_blank' : ''
);
const icon = computed(() => props.presentation.icon || '');

function sendEventOnButtonClick(): void {
  useGoogleAnalyticsEvent({
    action: 'presentation-button',
    category: 'trafic',
    label: 'A user clicked on a presentation button',
    value: 2
  });
}
</script>

<style lang="scss" src="./presentation-page-button.scss" scoped />
