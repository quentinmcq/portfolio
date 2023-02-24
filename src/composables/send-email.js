import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHtml } from '@/composables/email/html';
import { useEmailJs } from '@/composables/email/emailjs';

export function useEmailSender({ name, phone, email, message }) {
  const { t } = useI18n();
  const valid = ref(false);
  const loading = ref(false);

  const sendEmail = async () => {
    loading.value = true;

    try {
      const data = {
        name: name.value,
        phone: phone.value || '',
        email: email.value,
        message: message.value
      };

      await useEmailJs(data);
      useHtml({ html: t('contact.sent') });
    } catch {
      useHtml({ html: t('contact.error') });
    } finally {
      loading.value = false;
      showSendStatus(t('contact.send'));
    }
  };

  const showSendStatus = (status) => {
    setTimeout(() => useHtml({ html: status }), 3000);
  };

  return { valid, loading, sendEmail };
}
