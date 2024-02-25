<template>
  <v-container :id="componentName" class="contact">
    <CategoryTitle :component-name="componentName" />

    <div v-if="showConfetti" v-confetti="{ force: 1, particleCount: 300, duration: 5000 }"/>

    <v-row align="center" data-aos="zoom-in" justify="center">
      <v-col>
        <v-card class="contact__card">
          <v-form
            ref="form"
            v-model="valid"
            class="contact__form"
            @submit.prevent="sendEmail"
          >
            <v-text-field
              v-model="name"
              :label="$t('contact.name')"
              :rules="nameRules"
              class="contact__form__field"
              clearable
              color="#273142"
              required
              type="text"
              variant="underlined"
            />

            <v-text-field
              v-model="phone"
              :counter="10"
              :label="$t('contact.phone-number')"
              :rules="phoneRules"
              class="contact__form__field"
              clearable
              color="#273142"
              type="tel"
              variant="underlined"
            />

            <v-text-field
              v-model="email"
              :label="$t('contact.mail-address')"
              :rules="emailRules"
              class="contact__form__field"
              clearable
              color="#273142"
              required
              type="email"
              variant="underlined"
            />

            <v-textarea
              v-model="message"
              :label="$t('contact.message')"
              :rows="textAreaRows"
              :rules="messageRules"
              auto-grow
              class="contact__form__field"
              clearable
              color="#273142"
              required
              type="text"
              variant="underlined"
            />

            <v-container class="contact__form__buttons">
              <v-btn
                id="message-status"
                :aria-label="$t('contact.send')"
                :loading="loading"
                :size="buttonSize"
                color="#e52c4d"
                type="submit"
                @click="validateForm"
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

<script lang="ts" setup>
import { vConfetti } from '@neoconfetti/vue';
import { ref, reactive } from 'vue';
import { useFieldRules } from '@/composables/form/field-rules';
import { useResponsive } from '@/composables/style/responsive';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';
import { useEmailJs } from '@/composables/form/emailjs';
import { useSetInnerHTML } from '@/composables/common/inner-html';
import { useI18n } from 'vue-i18n';
import { useComponentName } from '@/composables/common/component-name';

const componentName = useComponentName();
const { buttonSize, textAreaRows } = useResponsive();
const { nameRules, phoneRules, emailRules, messageRules } = useFieldRules();
const form = ref<HTMLInputElement | null>(null);

const { t } = useI18n();
const name = ref('');
const phone = ref('');
const email = ref('');
const message = ref('');
const loading = ref(false);
const showConfetti = ref(false);

async function manageEmailSending(): Promise<void> {
  const formData = reactive({ name, phone, email, message });
  const sendFormButtonSelector = '#message-status .v-btn__content';

  try {
    loading.value = true;
    await useEmailJs(formData);
    useSetInnerHTML(sendFormButtonSelector, t('contact.sent'));
    showConfetti.value = true;
  } catch {
    useSetInnerHTML(sendFormButtonSelector, t('contact.error'));
  } finally {
    loading.value = false;
    resetSendFormButtonLabel(sendFormButtonSelector);
  }
}

function resetSendFormButtonLabel(selector: string): void {
  setTimeout(() => useSetInnerHTML(selector, t('contact.send')), 5000);
}

const valid = ref(false);

async function sendEmail(): Promise<void> {
  if (valid.value) {
    await manageEmailSending();
    resetForm();
  }
}

function validateForm(): void {
  form.value?.validate();
}

function resetForm(): void {
  form.value?.reset();
}
</script>

<style lang="scss" src="./contact.scss"/>
