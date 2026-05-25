import { useI18n } from 'vue-i18n'

import { MIN_MESSAGE_LENGTH } from '@/shared/contact'

export type FieldRule = (value: string) => string | true

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export function useFieldRules() {
  const { t } = useI18n()

  const required: FieldRule = v => Boolean(v) || t('contact.required-field')
  const email: FieldRule = v => !v || EMAIL_REGEX.test(v) || t('contact.invalid-address-format')
  const minLength: FieldRule = v => v?.length >= MIN_MESSAGE_LENGTH || t('contact.min-message-length', { minLength: MIN_MESSAGE_LENGTH })

  return {
    emailRules: [required, email],
    messageRules: [required, minLength],
    nameRules: [required],
  }
}
