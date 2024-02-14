import {type Ref, ref} from 'vue';
import { useI18n } from 'vue-i18n';
import { useEmailJs } from '@/composables/email/emailjs';
import { useSetInnerHTML } from '@/composables/email/inner-html';

interface FormData {
  name: { value: string };
  phone: { value: string };
  email: { value: string };
  message: { value: string };
}

interface UseEmailSender {
  valid: Ref<boolean>;
  loading: Ref<boolean>;
  showConfettis: Ref<boolean>;
  sendEmail: () => Promise<void>;
}

export function useEmailSender(formData: FormData): UseEmailSender {
  const { t } = useI18n();
  const valid = ref(false);
  const loading = ref(false);
  const showConfettis = ref(false);

  const sendEmail = async () => {
    loading.value = true;

    try {
      const data = {
        name: formData.name.value,
        phone: formData.phone.value || '',
        email: formData.email.value,
        message: formData.message.value
      };

      await useEmailJs(data);
      useSetInnerHTML({ content: t('contact.sent') });
      showConfettis.value = true;
    } catch {
      useSetInnerHTML({ content: t('contact.error') });
    } finally {
      loading.value = false;
      resetSendStatus();
    }
  };

  const resetSendStatus = () => {
    setTimeout(() => useSetInnerHTML({ content: t('contact.send') }), 3000);
  };

  return { valid, loading, showConfettis, sendEmail };
}
