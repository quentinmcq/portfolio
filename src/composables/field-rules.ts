import { useI18n } from 'vue-i18n'

export type FieldRule = (value: string) => string | true
type Translator = ReturnType<typeof useI18n>['t']

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const MIN_MESSAGE_LENGTH = 20

interface FieldRules {
  emailRules: FieldRule[]
  messageRules: FieldRule[]
  nameRules: FieldRule[]
}

export function useFieldRules(): FieldRules {
  const { t } = useI18n()

  return {
    emailRules: [requiredField(t), emailFormat(t)],
    messageRules: [requiredField(t), minMessageLength(t)],
    nameRules: [requiredField(t)],
  }
}

function emailFormat(t: Translator): FieldRule {
  return value => !value || EMAIL_REGEX.test(value) || t('contact.invalid-address-format')
}

function minMessageLength(t: Translator): FieldRule {
  return value => value?.length >= MIN_MESSAGE_LENGTH
    || t('contact.min-message-length', { minLength: MIN_MESSAGE_LENGTH })
}

function requiredField(t: Translator): FieldRule {
  return value => Boolean(value) || t('contact.required-field')
}
