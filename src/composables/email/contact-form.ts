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

const messageMinLength: number = 20;

export function useContactForm({ form }: Form): ContactForm {
  const { t } = useI18n();

  const requiredField = () => (v: any) => Boolean(v) || t('contact.required-field');
  const invalidPhoneNumber = t('contact.invalid-phone-number');
  const invalidAddressFormat = t('contact.invalid-address-format');
  const minMessageLength = () => (v: string | any[]) =>
    (v && v.length >= messageMinLength) ||
    t('contact.min-message-length', { minLength: messageMinLength });

  const name = ref('');
  const phone = ref('');
  const email = ref('');
  const message = ref('');

  const nameRules = ref([requiredField()]);
  const phoneRules = ref([
      (v: string) => !v || /^0[1-9]\d{8}$/.test(v) || invalidPhoneNumber
  ]);
  const emailRules = ref([
    requiredField(),
      (v: string) => !v || /.+@.+\..+/.test(v) || invalidAddressFormat
  ]);
  const messageRules = ref([requiredField(), minMessageLength()]);

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
