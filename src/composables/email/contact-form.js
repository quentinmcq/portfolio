import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const MESSAGE_MIN_LENGTH = 20;

export function useContactForm({ form }) {
  const { t } = useI18n();

  const REQUIRED_FIELD = () => v => Boolean(v) || t('contact.required-field');
  const INVALID_PHONE_NUMBER = t('contact.invalid-phone-number');
  const INVALID_ADDRESS_FORMAT = t('contact.invalid-address-format');
  const MIN_MESSAGE_LENGTH = () => v =>
    (v && v.length >= MESSAGE_MIN_LENGTH) ||
    t('contact.min-message-length', { MESSAGE_MIN_LENGTH });

  const name = ref('');
  const phone = ref('');
  const email = ref('');
  const message = ref('');

  const nameRules = ref([REQUIRED_FIELD()]);
  const phoneRules = ref([
    v => !v || /^0[1-9]\d{8}$/.test(v) || INVALID_PHONE_NUMBER
  ]);
  const emailRules = ref([
    REQUIRED_FIELD(),
    v => !v || /.+@.+\..+/.test(v) || INVALID_ADDRESS_FORMAT
  ]);
  const messageRules = ref([REQUIRED_FIELD(), MIN_MESSAGE_LENGTH()]);

  const validateForm = () => form.value.validate();
  const resetForm = () => form.value.reset();

  return {
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
  };
}
