import emailJS from 'emailjs-com';
import type { Ref } from 'vue';

const USER_ID: string = import.meta.env.VITE_APP_EMAILJS_USER_ID;
const SERVICE_ID: string = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID: string = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;

export async function useEmailJs(form: Ref<HTMLFormElement | null>): Promise<void> {
  emailJS.init(USER_ID);
  await emailJS.sendForm(SERVICE_ID, TEMPLATE_ID, form.value?.$el);
}
