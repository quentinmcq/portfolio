interface useSetInnerHtmlParameters {
  selector?: string;
  content: string;
}

interface useSetInnerHtml {
  setInnerHTML: (element: Element | null) => void;
}

export function useSetInnerHTML({
  selector = '#message-status .v-btn__content',
  content
}: useSetInnerHtmlParameters): useSetInnerHtml  {
  const setInnerHTML = (element: Element | null) => {
    if (element) {
      element.innerHTML = content;
    }
  };

  const element = document.querySelector(selector);
  setInnerHTML(element);

  return { setInnerHTML };
}
