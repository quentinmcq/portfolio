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

interface Props {
  items?: Array<Object>;
  label: string;
}

const props = withDefaults(defineProps<Props>(), {
  items: []
});

const emit = defineEmits<{
  'see-more': []
}>();

const { lgAndUp } = useDisplay();
const { buttonSize } = useResponsive();
const { t } = useI18n();

const numberOfItemsToDisplay = lgAndUp.value ? 4 : 2;

function loadMore() {
  emit('see-more', numberOfItemsToDisplay);
  
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
