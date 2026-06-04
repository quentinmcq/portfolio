<template>
  <div
    class="field"
    :class="{
      'field--focused': focused,
      'field--filled': hasValue,
      'field--error': showError,
      'field--textarea': type === 'textarea',
    }"
  >
    <label class="field__label" :for="fieldId">
      {{ label }}
      <span v-if="required" aria-hidden="true">*</span>
    </label>

    <textarea
      v-if="type === 'textarea'"
      :id="fieldId"
      ref="inputRef"
      v-model="value"
      class="field__control field__control--textarea"
      :name="name"
      :rows="rows"
      :required="required"
      :minlength="minLength"
      :maxlength="maxLength"
      :aria-invalid="showError"
      :aria-describedby="showError ? `${fieldId}-error` : undefined"
      @focus="focused = true"
      @blur="onBlur"
    />
    <input
      v-else
      :id="fieldId"
      ref="inputRef"
      v-model="value"
      class="field__control"
      :type="type"
      :name="name"
      :required="required"
      :minlength="minLength"
      :maxlength="maxLength"
      :inputmode="inputmode"
      :autocomplete="autocomplete"
      :aria-invalid="showError"
      :aria-describedby="showError ? `${fieldId}-error` : undefined"
      @focus="focused = true"
      @blur="onBlur"
    />

    <span class="field__line" aria-hidden="true" />

    <Transition name="field-msg">
      <span v-if="showError" :id="`${fieldId}-error`" class="field__error" role="alert">
        {{ errorMessage }}
      </span>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useId, useTemplateRef, watch } from 'vue'

import type { FieldRule } from '@/composables/field-rules'

const {
  autocomplete = undefined,
  inputmode = undefined,
  label,
  maxLength = undefined,
  minLength = undefined,
  name,
  required = false,
  rows = 6,
  rules = [],
  type = 'text',
} = defineProps<{
  autocomplete?: string
  inputmode?: 'email'
  label: string
  maxLength?: number
  minLength?: number
  name: string
  required?: boolean
  rows?: number
  rules?: FieldRule[]
  type?: 'email' | 'text' | 'textarea'
}>()

const value = defineModel<string>({ required: true })
const valid = defineModel<boolean>('valid', { default: false })

const fieldId = useId()
const inputRef = useTemplateRef<HTMLInputElement | HTMLTextAreaElement>('inputRef')
const focused = ref(false)
const touched = ref(false)

const hasValue = computed(() => !!(value.value && value.value.length > 0))

const errorMessage = computed<null | string>(() => {
  for (const rule of rules) {
    const result = rule(value.value ?? '')
    if (result !== true) return result
  }
  return null
})

const isValid = computed(() => errorMessage.value === null)
const showError = computed(() => touched.value && !isValid.value)

watch(isValid, (v) => (valid.value = v), { immediate: true })

function onBlur() {
  focused.value = false
  touched.value = true
}

defineExpose({
  focus() {
    inputRef.value?.focus()
  },
  reset() {
    value.value = ''
    touched.value = false
    focused.value = false
  },
  touch() {
    touched.value = true
  },
})
</script>

<style lang="scss" src="./form-field.scss" scoped />
