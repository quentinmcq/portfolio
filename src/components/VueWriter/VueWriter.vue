<template>
  <div class="is-typed">
    <slot />
    <span class="typed">{{ typeValue }}</span>
    <span :class="caret + ' ' + { typing: typeStatus }">&nbsp;</span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const { array, caret = 'cursor', delay = 2000, eraseSpeed = 100, intervals = 500, iterations = 0, start = 0, typeSpeed = 200 } = defineProps<{
  array: string[]
  caret?: string
  delay?: number
  eraseSpeed?: number
  intervals?: number
  iterations?: number
  start?: number
  typeSpeed?: number
}>()

const emit = defineEmits<{
  'typed': [typedString: string]
}>()

const typeValue = ref('')
const count = ref(0)
const typeStatus = ref(false)
const arrayIndex = ref(0)
const charIndex = ref(0)

function eraser(): void {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true
    typeValue.value = array[arrayIndex.value].substring(0, charIndex.value - 1)
    charIndex.value -= 1
    setTimeout(eraser, eraseSpeed)
  }
  else {
    typeStatus.value = false
    arrayIndex.value += 1
    if (arrayIndex.value >= array.length) arrayIndex.value = 0
    setTimeout(typewriter, typeSpeed + intervals)
  }
}

function onTyped(typedString: string): void {
  emit('typed', typedString)
}

function typewriter(): boolean | undefined {
  let loop = 0

  if (charIndex.value < array[arrayIndex.value].length) {
    if (!typeStatus.value) {
      typeStatus.value = true
    }

    typeValue.value += array[arrayIndex.value].charAt(charIndex.value)
    charIndex.value += 1
    setTimeout(typewriter, typeSpeed)
  }
  else {
    count.value += 1

    onTyped(array[arrayIndex.value])

    if (count.value === array.length) {
      loop += 1
      if (loop === iterations) {
        return (typeStatus.value = false)
      }
    }

    typeStatus.value = false

    setTimeout(eraser, delay)
  }
}

setTimeout(typewriter, start)
</script>
