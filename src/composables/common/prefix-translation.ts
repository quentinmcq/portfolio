import type { Ref } from 'vue'

export function usePrefixTranslation(componentName: Ref<string>, index: Ref<number>): string {
  /** Used exclusively when looping over a JSON object
        - the label (ex: education)
        - the index (ex: 0)
      This will allow you to retrieve the corresponding translations
   */
  return `${componentName.value}[${index.value}]`
}
