export function usePrefixTranslation(label, index) {
  /** Used exclusively when looping over a JSON object
        - the label (ex: education)
        - the index (ex: 0)
      This will allow you to retrieve the corresponding translations
   */
  return `${label}[${index}]`;
}
