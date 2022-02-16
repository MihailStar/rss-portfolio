const blockClassName = 'hamburger';

class Hamburger {
  onPressed: (isPressed: boolean) => void;
  private readonly $element: HTMLButtonElement;
  private pressed: boolean;

  constructor({ rootClassName }: { rootClassName: string }) {
    const $element = document.querySelector(
      `${rootClassName} .${blockClassName}`
    ) as HTMLButtonElement;
    if (!($element instanceof HTMLButtonElement)) {
      throw new Error('Offcanvas button not found');
    }

    this.$element = $element;
    this.$element.type = 'button';
    this.$element.ariaExpanded = 'false';
    this.$element.ariaPressed = 'false';
    this.$element.addEventListener('click', (event) => {
      this.handleButtonClick(event);
    });

    this.pressed = false;
    this.onPressed = (): void => {};
  }

  get isPressed(): typeof this.pressed {
    return this.pressed;
  }

  set isPressed(value: typeof this.pressed) {
    this.pressed = value;

    this.$element.classList[value ? 'add' : 'remove'](
      `${blockClassName}_pressed`
    );
    this.$element.ariaExpanded = value ? 'true' : 'false';
    this.$element.ariaPressed = value ? 'true' : 'false';

    this.onPressed(value);
  }

  private handleButtonClick(this: this, event: MouseEvent): void {
    event.preventDefault();

    this.isPressed = !this.isPressed;
  }
}

export { Hamburger };
