export function useHtml({ selector = '#message-status', html }) {
  const querySelector = document.querySelector(selector);
  const setHtml = (querySelector.innerHTML = html);

  return { setHtml };
}
