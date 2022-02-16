type ThemeName = 'dark' | 'light';
type ThemeElement = HTMLButtonElement & { dataset: { theme: ThemeName } };

const blockClassName = 'theme';

class Theme {
  onChanged: (themeName: ThemeName) => void;
  private readonly $element: ThemeElement;

  constructor({ rootClassName }: { rootClassName: string }) {
    const $element = document.querySelector(
      `${rootClassName} .${blockClassName}`
    ) as ThemeElement;
    if (!($element instanceof HTMLButtonElement)) {
      throw new Error('Theme not found');
    }

    this.$element = $element;
    this.$element.addEventListener('click', () => {
      this.handleClick();
    });

    this.onChanged = (): void => {};
  }

  private handleClick(this: this): void {
    if (this.$element.dataset.theme === 'dark') {
      this.$element.dataset.theme = 'light';
      this.$element.classList.add(`${blockClassName}_light`);
      this.$element.classList.remove(`${blockClassName}_dark`);
      this.onChanged('light');
    } else {
      this.$element.dataset.theme = 'dark';
      this.$element.classList.add(`${blockClassName}_dark`);
      this.$element.classList.remove(`${blockClassName}_light`);
      this.onChanged('dark');
    }
  }
}

export { Theme };
