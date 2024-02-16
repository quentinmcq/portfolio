<template>
  <v-container :id="label" class="contact">
    <category-title :label="label"/>

    <div v-if="showConfettis" v-confetti="{ force: 0.9 }"/>

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
                  color="#273142"
                  type="submit"
                  @click="validateForm"
              >
                {{ $t('contact.send') }}
              </v-btn>

              <v-btn
                  :aria-label="$t('contact.erase')"
                  :size="buttonSize"
                  class="ml-4"
                  color="#e52c4d"
                  outlined
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
import { useContactForm } from '@/composables/email/contact-form';
import { useResponsive } from '@/composables/responsive';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';
import { useEmailJs } from "@/composables/email/emailjs";
import { useSetInnerHTML } from "@/composables/email/inner-html";
import { useI18n } from "vue-i18n";

defineProps<{
  label: string
}>();

const { t } = useI18n();

const valid = ref(false);
const loading = ref(false);
const showConfettis = ref(false);

const { buttonSize, textAreaRows } = useResponsive();

const form = ref<HTMLInputElement | null>(null);
const {
  name,
  phone,
  email,
  message,
  nameRules,
  phoneRules,
  emailRules,
  messageRules,
  validateForm,
  resetForm
} = useContactForm({ form });

async function manageEmailSending(): Promise<void> {
  const formData = reactive({ name, phone, email, message });
  const sendFormButtonSelector = '#message-status .v-btn__content';

  try {
    loading.value = true;
    await useEmailJs(formData);
    useSetInnerHTML(sendFormButtonSelector, t('contact.sent'));
    showConfettis.value = true;
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

async function sendEmail(): Promise<void> {
  if (valid.value) {
    await manageEmailSending();
    resetForm();
  }
}
</script>

<style lang="scss" src="./contact.scss"/>
