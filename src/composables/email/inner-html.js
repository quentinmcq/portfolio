export function useSetInnerHTML({
  selector = '#message-status .v-btn__content',
  content
}) {
  const setInnerHTML = element => {
    if (element) {
      element.innerHTML = content;
    }
  };

  const element = document.querySelector(selector);
  setInnerHTML(element);

  return { setInnerHTML };
}
