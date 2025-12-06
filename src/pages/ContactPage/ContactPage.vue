<template>
  <v-container
    :id="componentName"
    class="contact-page py-16"
  >
    <CategoryTitle :component-name />

    <div
      v-if="showConfetti"
      v-confetti="{ force: 1, particleCount: 300, duration: 5000 }"
    />

    <v-row
      align="center"
      data-aos="fade-up"
      justify="center"
      class="mt-8"
    >
      <v-col
        cols="12"
        md="8"
        lg="6"
      >
        <div class="glass-card pa-8 pa-md-12">
          <v-form
            ref="form"
            v-model="valid"
            class="contact-page__form"
            @submit.prevent="sendEmail"
          >
            <v-text-field
              :label="$t('contact.name')"
              :rules="nameRules"
              class="mb-4 glass-input"
              color="primary"
              required
              type="text"
              name="name"
              variant="outlined"
              bg-color="transparent"
            />

            <v-text-field
              :counter="10"
              :label="$t('contact.phone-number')"
              :rules="phoneRules"
              class="mb-4 glass-input"
              color="primary"
              type="tel"
              name="phone"
              variant="outlined"
              bg-color="transparent"
            />

            <v-text-field
              :label="$t('contact.mail-address')"
              :rules="emailRules"
              class="mb-4 glass-input"
              color="primary"
              required
              type="email"
              name="email"
              variant="outlined"
              bg-color="transparent"
            />

            <v-textarea
              :label="$t('contact.message')"
              :rows="textAreaRows"
              :rules="messageRules"
              auto-grow
              class="mb-6 glass-input"
              color="primary"
              required
              type="text"
              name="message"
              variant="outlined"
              bg-color="transparent"
            />

            <div class="text-center d-flex justify-center ga-4">
              <v-btn
                id="message-status"
                :aria-label="$t('contact.send')"
                :loading
                :size="buttonSize"
                color="primary"
                type="submit"
                class="flex-grow-1"
              >
                {{ $t('contact.send') }}
              </v-btn>

              <v-btn
                :aria-label="$t('contact.erase')"
                :size="buttonSize"
                color="white"
                variant="outlined"
                @click="resetForm"
              >
                {{ $t('contact.erase') }}
              </v-btn>
            </div>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { vConfetti } from '@neoconfetti/vue'
import { ref, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { useChallengeV3 } from 'vue-recaptcha/head'

import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import { useComponentName } from '@/composables/common/component-name'
import { useSetInnerHTML } from '@/composables/common/inner-html'
import { useEmailJs } from '@/composables/form/emailjs'
import { useFieldRules } from '@/composables/form/field-rules'
import { useResponsive } from '@/composables/style/responsive'

const { execute } = useChallengeV3('submit')
const componentName = useComponentName()
const { buttonSize, textAreaRows } = useResponsive()
const { emailRules, messageRules, nameRules, phoneRules } = useFieldRules()

const { t } = useI18n()
const loading = ref(false)
const showConfetti = ref(false)
const formRef = useTemplateRef('form')

async function manageEmailSending(): Promise<void> {
  const sendFormButtonSelector = '#message-status .v-btn__content'

  try {
    loading.value = true
    await execute()
    await useEmailJs(formRef)
    useSetInnerHTML(sendFormButtonSelector, t('contact.sent'))
    showConfetti.value = true
  }
  catch {
    useSetInnerHTML(sendFormButtonSelector, t('contact.error'))
  }
  finally {
    loading.value = false
    resetSendFormButtonLabel(sendFormButtonSelector)
  }
}

function resetSendFormButtonLabel(selector: string): void {
  setTimeout(() => useSetInnerHTML(selector, t('contact.send')), 5000)
}

const valid = ref(false)

function resetForm(): void {
  formRef.value?.reset()
}

async function sendEmail(): Promise<void> {
  if (!valid.value) {
    return
  }

  await manageEmailSending()
  resetForm()
}
</script>

<style lang="scss" src="./contact-page.scss" />
