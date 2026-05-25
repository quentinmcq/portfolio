<template>
  <section
    :id="componentName"
    class="section contact"
  >
    <div class="container">
      <CategoryTitle :component-name />

      <div class="contact__grid">
        <aside
          class="contact__intro"
          aria-label="Channels"
        >
          <p
            class="contact__lede"
            data-reveal
          >
            {{ $t('contact.lede') }}
          </p>

          <div
            class="contact__channels"
            data-reveal
            style="--reveal-delay: 100ms"
          >
            <span class="contact__channels-label">{{ $t('contact.channels') }}</span>

            <ul class="contact__channel-list">
              <li>
                <a
                  class="contact__channel"
                  :href="`mailto:${CONTACTS.email}`"
                >
                  <span class="contact__channel-key">Email</span>
                  <span class="contact__channel-val">{{ CONTACTS.email }}</span>
                </a>
              </li>
              <li>
                <a
                  class="contact__channel"
                  :href="linkedinUrl"
                  target="_blank"
                  rel="noopener"
                >
                  <span class="contact__channel-key">LinkedIn</span>
                  <span class="contact__channel-val">{{ CONTACTS.linkedinHandle }}</span>
                </a>
              </li>
              <li>
                <a
                  class="contact__channel"
                  :href="githubUrl"
                  target="_blank"
                  rel="noopener"
                >
                  <span class="contact__channel-key">GitHub</span>
                  <span class="contact__channel-val">{{ CONTACTS.githubHandle }}</span>
                </a>
              </li>
              <li>
                <div class="contact__channel">
                  <span class="contact__channel-key">Where</span>
                  <span class="contact__channel-val">{{ $t('header.meta-location') }}</span>
                </div>
              </li>
            </ul>
          </div>
        </aside>

        <div
          class="contact__form-wrap"
          data-reveal
          style="--reveal-delay: 150ms"
        >
          <div
            v-if="submitState === 'sent'"
            class="contact__success"
            role="status"
            aria-live="polite"
          >
            <svg
              aria-hidden="true"
              class="contact__success-icon"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
            <p class="contact__success-title">{{ $t('contact.sent') }}</p>
            <button
              class="contact__success-action"
              type="button"
              @click="submitState = 'idle'"
            >
              {{ $t('contact.send-another') }}
            </button>
          </div>

          <form
            v-else
            class="contact__form"
            @submit.prevent="sendMessage"
          >
            <FormField
              v-model="form.name"
              v-model:valid="validity.name"
              name="name"
              :label="$t('contact.name')"
              type="text"
              autocomplete="name"
              required
              :max-length="MAX_NAME_LENGTH"
              :rules="nameRules"
            />

            <FormField
              v-model="form.email"
              v-model:valid="validity.email"
              name="email"
              :label="$t('contact.mail-address')"
              type="email"
              inputmode="email"
              autocomplete="email"
              required
              :max-length="MAX_EMAIL_LENGTH"
              :rules="emailRules"
            />

            <FormField
              v-model="form.message"
              v-model:valid="validity.message"
              name="message"
              :label="$t('contact.message')"
              type="textarea"
              :rows="textAreaRows"
              required
              :min-length="MIN_MESSAGE_LENGTH"
              :max-length="MAX_MESSAGE_LENGTH"
              :rules="messageRules"
            />

            <div class="contact__form-actions">
              <button
                id="message-status"
                class="contact__submit"
                type="submit"
                :aria-label="$t('contact.send')"
                :disabled="loading"
              >
                <span class="contact__submit-label">
                  {{ submitLabel }}
                </span>
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>

              <button
                class="contact__reset"
                type="button"
                :aria-label="$t('contact.erase')"
                @click="resetForm"
              >
                {{ $t('contact.erase') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import FormField from '@/components/FormField/FormField.vue'
import { useBreakpoints } from '@/composables/breakpoints'
import { useFieldRules } from '@/composables/field-rules'
import { CONTACTS } from '@/data/contacts'
import {
  CONTACT_ENDPOINT,
  MAX_EMAIL_LENGTH,
  MAX_MESSAGE_LENGTH,
  MAX_NAME_LENGTH,
  MIN_MESSAGE_LENGTH,
} from '@/shared/contact'

const componentName = 'contact'
const { xs } = useBreakpoints()
const textAreaRows = computed(() => (xs.value ? 4 : 6))

const { emailRules, messageRules, nameRules } = useFieldRules()

const { t } = useI18n()
const loading = ref(false)

const { github: githubUrl, linkedin: linkedinUrl } = CONTACTS

type SubmitState = 'error' | 'idle' | 'sending' | 'sent'
const submitState = ref<SubmitState>('idle')

const submitLabel = computed(() => {
  switch (submitState.value) {
    case 'error': return t('contact.error')
    case 'sending': return t('contact.sending')
    case 'sent': return t('contact.sent')
    default: return t('contact.send')
  }
})

const form = reactive({
  email: '',
  message: '',
  name: '',
})

const validity = reactive({
  email: false,
  message: false,
  name: false,
})

const valid = computed(() =>
  validity.name && validity.email && validity.message,
)

function resetForm() {
  form.name = ''
  form.email = ''
  form.message = ''
  submitState.value = 'idle'
}

async function sendMessage() {
  if (!valid.value) return

  loading.value = true
  submitState.value = 'sending'

  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      body: JSON.stringify({
        email: form.email,
        message: form.message,
        name: form.name,
      }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    if (!response.ok) {
      submitState.value = 'error'

      return
    }

    submitState.value = 'sent'
    form.name = ''
    form.email = ''
    form.message = ''
  }
  catch {
    submitState.value = 'error'
  }
  finally {
    loading.value = false
    setTimeout(() => {
      if (submitState.value !== 'sending') submitState.value = 'idle'
    }, 5000)
  }
}
</script>

<style lang="scss" src="./contact-section.scss" />
