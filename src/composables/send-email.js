import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useEmailJs } from '@/composables/email/emailjs';
import { useSetInnerHTML } from '@/composables/email/inner-html';

export function useEmailSender(formData) {
  const { t } = useI18n();
  const valid = ref(false);
  const loading = ref(false);

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

  return { valid, loading, sendEmail };
}
