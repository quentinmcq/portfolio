<template>
  <v-container :id="label" class="contact">
    <category-title :label="label" />

    <v-row align="center" data-aos="zoom-in" justify="center">
      <v-col>
        <v-card class="contact__card">
          <v-form
            ref="form"
            v-model="valid"
            class="contact__form"
            @submit.prevent="handleSubmit"
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
              :counter="PHONE_NUMBER_MAX_LENGTH"
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
                :loading="loading"
                :size="buttonSize"
                color="#273142"
                type="submit"
                @click="validateForm"
              >
                {{ $t('contact.send') }}
              </v-btn>

              <v-btn
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

<script setup>
import { ref } from 'vue';
import { useContactForm } from '@/composables/email/contact-form';
import { useResponsive } from '@/composables/responsive';
import { useEmailSender } from '@/composables/send-email';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';

defineProps({
  label: {
    type: String,
    required: true
  }
});

const PHONE_NUMBER_MAX_LENGTH = 10;
const { buttonSize, textAreaRows } = useResponsive();

const form = ref(null);
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

const { valid, loading, sendEmail } = useEmailSender({
  name,
  phone,
  email,
  message
});

async function handleSubmit() {
  if (valid.value) {
    await sendEmail();
    resetForm();
  }
}
</script>

<style lang="scss" src="./contact.scss" />
