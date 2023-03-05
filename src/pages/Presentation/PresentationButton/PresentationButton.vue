<template class="presentation-button">
  <v-btn
    class="presentation-button__config"
    theme="dark"
    :href="presentation.link"
    :target="target"
    :color="presentation.color"
    :size="buttonSize"
    :prepend-icon="icon"
    @click="sendEventOnButtonClick"
  >
    {{ presentation.label }}
  </v-btn>
</template>

<script setup>
import { computed } from 'vue';
import { useGoogleAnalyticsEvent } from '@/composables/google-analytics';
import { useResponsive } from '@/composables/responsive';

const props = defineProps({
  presentation: {
    type: Object,
    required: true
  }
});

const { buttonSize } = useResponsive();

const target = computed(() =>
  !props.presentation.link.startsWith('#') ? '_blank' : ''
);
const icon = computed(() => props.presentation.icon || '');

function sendEventOnButtonClick() {
  useGoogleAnalyticsEvent({
    action: 'presentation-button',
    category: 'trafic',
    label: 'A user clicked on a presentation button',
    value: 2
  });
}
</script>

<style lang="scss" src="./presentation-button.scss" scoped />
