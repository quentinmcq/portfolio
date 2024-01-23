import { type Ref, ref} from 'vue';
import { useI18n } from 'vue-i18n';

interface Form {
  form: any;
}

interface ContactForm {
  name: Ref<string>;
  phone: Ref<string>;
  email: Ref<string>;
  message: Ref<string>;
  nameRules: Ref<((v: any) => string | true)[]>
  phoneRules: Ref<((v: any) => string | true)[]>
  emailRules: Ref<((v: any) => string | true)[]>
  messageRules: Ref<((v: any) => string | true)[]>
  validateForm: () => boolean;
  resetForm: () => void;
}

const MESSAGE_MIN_LENGTH = 20;

export function useContactForm({ form }: Form): ContactForm {
  const { t } = useI18n();

  const REQUIRED_FIELD = () => (v: any) => Boolean(v) || t('contact.required-field');
  const INVALID_PHONE_NUMBER = t('contact.invalid-phone-number');
  const INVALID_ADDRESS_FORMAT = t('contact.invalid-address-format');
  const MIN_MESSAGE_LENGTH = () => (v: string | any[]) =>
    (v && v.length >= MESSAGE_MIN_LENGTH) ||
    t('contact.min-message-length', { MESSAGE_MIN_LENGTH });

  const name = ref('');
  const phone = ref('');
  const email = ref('');
  const message = ref('');

  const nameRules = ref([REQUIRED_FIELD()]);
  const phoneRules = ref([
      (v: string) => !v || /^0[1-9]\d{8}$/.test(v) || INVALID_PHONE_NUMBER
  ]);
  const emailRules = ref([
    REQUIRED_FIELD(),
      (v: string) => !v || /.+@.+\..+/.test(v) || INVALID_ADDRESS_FORMAT
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
