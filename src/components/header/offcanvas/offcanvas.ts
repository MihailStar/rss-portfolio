function getVerticalScrollbarWidth(): number {
  return window.innerWidth - document.documentElement.clientWidth;
}

const blockClassName = 'offcanvas';

class Offcanvas {
  onDisplayed: (isDisplayed: boolean) => void;
  private readonly $element: HTMLDivElement;
  private readonly $content: HTMLDivElement;
  private readonly $overlay: HTMLDivElement;
  private displayed: boolean;

  constructor({ rootClassName }: { rootClassName: string }) {
    const $element = document.querySelector(
      `${rootClassName} .${blockClassName}`
    ) as HTMLDivElement;
    if (!($element instanceof HTMLDivElement)) {
      throw new Error('Offcanvas not found');
    }
    const $content = $element.querySelector(
      `.${blockClassName}__content`
    ) as HTMLDivElement;
    const $overlay = $element.querySelector(
      `.${blockClassName}__overlay`
    ) as HTMLDivElement;
    if (
      !($content instanceof HTMLDivElement) ||
      !($overlay instanceof HTMLDivElement)
    ) {
      throw new Error('Offcanvas element not found');
    }

    this.$element = $element;
    this.$element.ariaHidden = 'true';
    this.$element.style.visibility = 'hidden';

    this.$content = $content;
    this.$content.addEventListener('click', (event) => {
      this.handleContentClick(event);
    });

    this.$overlay = $overlay;
    this.$overlay.addEventListener('click', (event) => {
      this.handleOverlayClick(event);
    });

    this.displayed = false;
    this.onDisplayed = (): void => {};
  }

  get isDisplayed(): typeof this.displayed {
    return this.displayed;
  }

  set isDisplayed(value: typeof this.displayed) {
    this.displayed = value;

    document.body.style.paddingRight = value
      ? `${getVerticalScrollbarWidth()}px`
      : '';
    document.body.style.overflow = value ? 'hidden' : '';

    if (value) {
      this.$element.ariaHidden = 'false';
      this.$element.style.visibility = '';
    } else {
      this.$content.addEventListener(
        'transitionend',
        () => {
          this.$element.ariaHidden = 'true';
          this.$element.style.visibility = 'hidden';
        },
        { once: true }
      );
    }

    this.$content.classList[value ? 'add' : 'remove'](
      `${blockClassName}__content_displayed`
    );

    this.$overlay.classList[value ? 'add' : 'remove'](
      `${blockClassName}__overlay_displayed`
    );

    this.onDisplayed(value);
  }

  private handleContentClick(this: this, event: MouseEvent): void {
    if (!(event.target instanceof HTMLAnchorElement)) {
      return;
    }

    event.preventDefault();

    this.$content.addEventListener(
      'transitionend',
      () => {
        document.location.href = (event.target as HTMLAnchorElement).href;
      },
      { once: true }
    );

    this.isDisplayed = false;
  }

  private handleOverlayClick(this: this, event: MouseEvent): void {
    event.preventDefault();

    this.isDisplayed = false;
  }
}

export { Offcanvas };
