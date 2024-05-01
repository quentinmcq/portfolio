import type { Ref } from 'vue'

import emailjs from '@emailjs/browser'

const USER_ID: string = import.meta.env.VITE_APP_EMAILJS_USER_ID
const SERVICE_ID: string = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID
const TEMPLATE_ID: string = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID

export async function useEmailJs(form: Ref<HTMLFormElement | null>): Promise<void> {
  emailjs.init(USER_ID)
  await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.value?.$el)
}
