import { Language as LanguageType, i18n } from './i18n';

const $elements = [
  ...document.querySelectorAll<HTMLElement>('[data-i18n]'),
] as (HTMLElement & {
  dataset: { i18n: string };
})[];

function translate(lang: LanguageType): void {
  $elements.forEach(($element) => {
    const translation = i18n[lang][$element.dataset.i18n];

    if (typeof translation === 'string') {
      if (
        $element instanceof HTMLInputElement ||
        $element instanceof HTMLTextAreaElement
      ) {
        $element.placeholder = translation;
        return;
      }

      $element.textContent = translation;
    }
  });

  document.documentElement.lang = lang;
}

export { translate };
