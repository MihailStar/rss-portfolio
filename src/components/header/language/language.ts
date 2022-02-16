import { Language as LanguageType } from '../../../scripts/translate/i18n';

const blockClassName = 'language';

class Language {
  onChanged: (language: LanguageType) => void;
  private readonly $element: HTMLDivElement;
  private readonly $links: (HTMLAnchorElement & {
    dataset: { language: LanguageType };
  })[];

  constructor({ rootClassName }: { rootClassName: string }) {
    const $element = document.querySelector(
      `${rootClassName} .${blockClassName}`
    ) as HTMLDivElement;
    if (!($element instanceof HTMLDivElement)) {
      throw new Error('Language not found');
    }
    const $links = [
      ...$element.querySelectorAll<HTMLAnchorElement>(
        `.${blockClassName}__link`
      ),
    ] as (HTMLAnchorElement & { dataset: { language: LanguageType } })[];

    this.$element = $element;
    this.$element.addEventListener('click', (event) => {
      this.handleClick(event);
    });

    this.$links = $links;

    this.onChanged = (): void => {};
  }

  private handleClick(this: this, event: MouseEvent): void {
    if (!(event.target instanceof HTMLAnchorElement)) {
      return;
    }

    event.preventDefault();

    if (event.target.classList.contains(`${blockClassName}__link_active`)) {
      return;
    }

    this.$links.forEach(($link) => {
      if ($link === event.target) {
        $link.classList.add(`${blockClassName}__link_active`);
        $link.removeAttribute('href');
        this.onChanged($link.dataset.language);
        return;
      }

      $link.classList.remove(`${blockClassName}__link_active`);
      $link.setAttribute('href', `#${$link.dataset.language}`);
    });
  }
}

export { Language };
