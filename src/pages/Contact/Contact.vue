<template>
  <v-container :id="label" class="contact">
    <CategoryTitle :label="label" />

    <v-row align="center" justify="center" data-aos="zoom-in">
      <v-col>
        <v-card class="contact__card">
          <v-form class="contact__form" ref="form" v-model="valid" @submit.prevent="sendEmail">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              class="contact__form__field"
              :label="$t('contact.name')"
              color="#273142"
              type="text"
              variant="underlined"
              clearable
              required
            />

            <v-text-field
              v-model="phone"
              :counter="PHONE_NUMBER_LENGTH"
              :rules="phoneRules"
              class="contact__form__field"
              :label="$t('contact.phone-number')"
              color="#273142"
              type="tel"
              variant="underlined"
              clearable
            />

            <v-text-field
              v-model="email"
              :rules="emailRules"
              class="contact__form__field"
              :label="$t('contact.mail-address')"
              color="#273142"
              type="email"
              variant="underlined"
              clearable
              required
            />

            <v-textarea
              v-model="message"
              :rules="messageRules"
              class="contact__form__field"
              :label="$t('contact.message')"
              color="#273142"
              type="text"
              variant="underlined"
              auto-grow
              clearable
              required
              :rows="textAreaRows"
            />

            <v-container class="contact__form__buttons">
              <v-btn
                id="message-status"
                color="#273142"
                type="submit"
                :loading="loading"
                :size="buttonSize"
                @click="validate"
              >
                {{ $t('contact.submit') }}
              </v-btn>

              <v-btn color="#e52c4d" class="ml-4" :size="buttonSize" @click="reset" outlined>
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
import { useI18n } from 'vue-i18n';
import { useForm } from '@/composables/email/form';
import { useResponsive } from '@/composables/responsive';
import { useEmail } from '@/composables/send-email';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';

const PHONE_NUMBER_LENGTH = 10;

const { t } = useI18n();
const { buttonSize, textAreaRows } = useResponsive();

const label = ref('contact');
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
  validate,
  reset
} = useForm({ form });

const { valid, loading, send } = useEmail({
  name: name.value,
  phone: phone.value || t('contact.empty'),
  email: email.value,
  message: message.value
});

async function sendEmail() {
  if (valid.value) {
    await send();
    reset();
  }
}
</script>

<style lang="scss" src="./contact.scss" />
