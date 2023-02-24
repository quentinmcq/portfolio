export function useHtml({ selector = '#message-status .v-btn__content', html }) {
  const querySelector = document.querySelector(selector);
  const setHtml = (querySelector.innerHTML = html);

  return { setHtml };
}
