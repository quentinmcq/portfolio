import emailJS from 'emailjs-com';

const USER_ID = import.meta.env.VITE_APP_EMAILJS_USER_ID;
const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;

export async function useEmailJs({ data }) {
  emailJS.init(USER_ID);
  await emailJS.send(SERVICE_ID, TEMPLATE_ID, data);
}
