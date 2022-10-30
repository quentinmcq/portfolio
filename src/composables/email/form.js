import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const MESSAGE_MIN_LENGTH = 20;

export function useForm({ form }) {
  const { t } = useI18n();

  const name = ref('');
  const phone = ref('');
  const email = ref('');
  const message = ref('');

  const nameRules = ref([(v) => Boolean(v) || t('contact.required-field')]);
  const phoneRules = ref([
    (v) =>
      v && v.length > 0 && !/^0[1-9]\d{8}$/.test(v) ? t('contact.invalid-phone-number') : true
  ]);
  const emailRules = ref([
    (v) => Boolean(v) || t('contact.required-field'),
    (v) => /.+@.+\..+/.test(v) || t('contact.invalid-address-format')
  ]);
  const messageRules = ref([
    (v) => Boolean(v) || t('contact.required-field'),
    (v) =>
      (v && v.length >= MESSAGE_MIN_LENGTH) ||
      t('contact.min-message-length', { minLength: MESSAGE_MIN_LENGTH })
  ]);

  const validate = () => form.value.validate();
  const reset = () => form.value.reset();

  return {
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
  };
}
