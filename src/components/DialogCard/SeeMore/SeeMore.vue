<template>
  <v-container class="see-more">
    <v-btn
      :size="buttonSize"
      class="ma-3"
      color="#e52c4d"
      shaped
      @click="loadMore"
      :aria-label="$t('common.see-more')"
    >
      {{ $t('common.see-more') }}
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useResponsive } from '@/composables/responsive';
import { useGoogleAnalyticsEvent } from '@/composables/google-analytics';
import { useI18n } from 'vue-i18n';
import type { Project } from '@/types/Project';
import type { Hobby } from '@/types/Hobby';
import { computed } from 'vue';

interface Props {
  items: Project[] |Hobby[];
  label: string;
}

defineProps<Props>();

const emit = defineEmits<{
  'see-more': []
}>();

const { lgAndUp } = useDisplay();
const { buttonSize } = useResponsive();
const { t } = useI18n();

const numberOfItemsToDisplay = computed(() => lgAndUp.value ? 4 : 2);

function loadMore() {
  emit('see-more', numberOfItemsToDisplay.value);
  
  sendSeeMoreAnalyticsEvent();
}

function sendSeeMoreAnalyticsEvent() {
  useGoogleAnalyticsEvent({
    action: `see-more-button:click`,
    category: props.label,
    label: t('common.see-more')
  });
}
</script>

<style lang="scss" src="./see-more.scss" scoped />
