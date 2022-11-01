import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHtml } from '@/composables/email/html';
import { useEmailJs } from '@/composables/email/emailjs';

// import { useTimeout } from '@/composables/timeout';

export function useEmail({ name, phone, email, message }) {
  const { t } = useI18n();
  const valid = ref(false);
  const loading = ref(false);

  const STATUS = {
    SEND: t('contact.send'),
    SENT: t('contact.sent'),
    ERROR: t('contact.error')
  };

  const send = async () => {
    loading.value = true;

    try {
      const data = {
        name: name.value,
        phone: phone.value || t('contact.empty'),
        email: email.value,
        message: message.value
      };

      await useEmailJs(data);
      loading.value = false;
      useHtml({ html: STATUS.SENT });
    } catch {
      useHtml({ html: STATUS.ERROR });
    }

    // useTimeout({ code: useHtml({ html: STATUS.SEND }), delay: 3000 });
    setTimeout(() => useHtml({ html: STATUS.SEND }), 3000);
  };

  return { valid, loading, send };
}
