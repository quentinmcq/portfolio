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

const phoneRegex = /^0[1-9]\d{8}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const minMessageLength = (t) => (v: string | any[]) => {
  const minLength: number = 20;

  return (v && v.length >= minLength) || t('contact.min-message-length', { minLength });
};

const requiredField = (t) => (v: any) => Boolean(v) || t('contact.required-field');

export function useContactForm({ form }: Form): ContactForm {
  const { t } = useI18n();

  const name = ref('');
  const phone = ref('');
  const email = ref('');
  const message = ref('');
  
  const nameRules = ref([requiredField(t)]);
  const phoneRules = ref([(v: string) => !v || phoneRegex.test(v) || t('contact.invalid-phone-number')]);
  const emailRules = ref([requiredField(t), (v: string) => !v || emailRegex.test(v) || t('contact.invalid-address-format')]);
  const messageRules = ref([requiredField(t), minMessageLength(t)]);

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
