<template>
  <v-container
    :id="componentName"
    class="contact-page"
  >
    <CategoryTitle :component-name="componentName" />

    <div
      v-if="showConfetti"
      v-confetti="{ force: 1, particleCount: 300, duration: 5000 }"
    />

    <v-row
      align="center"
      data-aos="zoom-in"
      justify="center"
    >
      <v-col>
        <v-card class="contact-page__card">
          <v-form
            ref="form"
            v-model="valid"
            class="contact-page__form"
            @submit.prevent="sendEmail"
          >
            <v-text-field
              :label="$t('contact.name')"
              :rules="nameRules"
              class="contact-page__form__field"
              clearable
              color="#273142"
              required
              type="text"
              name="name"
              variant="underlined"
            />

            <v-text-field
              :counter="10"
              :label="$t('contact.phone-number')"
              :rules="phoneRules"
              class="contact-page__form__field"
              clearable
              color="#273142"
              type="tel"
              name="phone"
              variant="underlined"
            />

            <v-text-field
              :label="$t('contact.mail-address')"
              :rules="emailRules"
              class="contact-page__form__field"
              clearable
              color="#273142"
              required
              type="email"
              name="email"
              variant="underlined"
            />

            <v-textarea
              :label="$t('contact.message')"
              :rows="textAreaRows"
              :rules="messageRules"
              auto-grow
              class="contact-page__form__field"
              clearable
              color="#273142"
              required
              type="text"
              name="message"
              variant="underlined"
            />

            <v-container class="text-center">
              <v-btn
                id="message-status"
                :aria-label="$t('contact.send')"
                :loading="loading"
                :size="buttonSize"
                color="#e52c4d"
                type="submit"
              >
                {{ $t('contact.send') }}
              </v-btn>

              <v-btn
                :aria-label="$t('contact.erase')"
                :size="buttonSize"
                class="ml-4"
                color="#273142"
                variant="outlined"
                @click="resetForm"
              >
                {{ $t('contact.erase') }}
              </v-btn>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import { useComponentName } from '@/composables/common/component-name'
import { useSetInnerHTML } from '@/composables/common/inner-html'
import { useEmailJs } from '@/composables/form/emailjs'
import { useFieldRules } from '@/composables/form/field-rules'
import { useResponsive } from '@/composables/style/responsive'
import { vConfetti } from '@neoconfetti/vue'
import { ref, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { useChallengeV3 } from 'vue-recaptcha/head'

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
