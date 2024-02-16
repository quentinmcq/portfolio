export function useSetInnerHTML(selector: string, content: string) {
  const element = document.querySelector(selector);

  if (element) element.innerHTML = content;
}
