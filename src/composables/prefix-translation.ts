import type { Ref } from 'vue';

export function usePrefixTranslation(label: Ref<String>, index: Ref<Number>): string  {
  /** Used exclusively when looping over a JSON object
        - the label (ex: education)
        - the index (ex: 0)
      This will allow you to retrieve the corresponding translations
   */
  return `${label}[${index}]`;
}
