<template>
  <v-container :id="label" class="contact">
    <CategoryTitle :label="label" />

    <v-row align="center" data-aos="zoom-in" justify="center">
      <v-col>
        <v-card class="contact__card">
          <v-form ref="form" v-model="valid" class="contact__form" @submit.prevent="sendEmail">
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
              :counter="PHONE_NUMBER_LENGTH"
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
                @click="validate"
              >
                {{ $t('contact.send') }}
              </v-btn>

              <v-btn :size="buttonSize" class="ml-4" color="#e52c4d" outlined @click="reset">
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
import { useForm } from '@/composables/email/form';
import { useResponsive } from '@/composables/responsive';
import { useEmail } from '@/composables/send-email';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';

const PHONE_NUMBER_LENGTH = 10;
const { buttonSize, textAreaRows } = useResponsive();

const label = ref('contact');
const form = ref(null);
const {
  nameRules,
  phoneRules,
  emailRules,
  messageRules,
  validate,
  reset,
  name,
  phone,
  email,
  message
} = useForm({ form });

const { valid, loading, send } = useEmail({
  name,
  phone,
  email,
  message
});

async function sendEmail() {
  if (valid.value) {
    await send();
    reset();
  }
}
</script>

<style lang="scss" src="./contact.scss" />
