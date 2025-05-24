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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDisplay } from 'vuetify'

import { useGoogleAnalyticsEvent } from '@/composables/event/google-analytics'
import { useResponsive } from '@/composables/style/responsive'

const { componentName } = defineProps<{
  componentName: string
}>()

const emit = defineEmits<{
  'see-more': [itemsNumber: number]
}>()

const { lgAndUp } = useDisplay()
const { buttonSize } = useResponsive()
const { t } = useI18n()

const numberOfItemsToDisplay = computed(() => lgAndUp.value ? 4 : 2)

function loadMore(): void {
  emit('see-more', numberOfItemsToDisplay.value)

  sendSeeMoreAnalyticsEvent()
}

function sendSeeMoreAnalyticsEvent(): void {
  useGoogleAnalyticsEvent({
    action: `see-more-button:click`,
    category: componentName,
    label: t('common.see-more'),
  })
}
</script>

<style lang="scss" src="./see-more.scss" scoped />
