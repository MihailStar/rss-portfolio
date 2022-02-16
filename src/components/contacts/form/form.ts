class Form {
  onSubmit: (data: { [key: string]: string }) => void;
  private readonly $element: HTMLFormElement;

  constructor(className: string) {
    const $element = document.querySelector(className) as HTMLFormElement;
    if (!($element instanceof HTMLFormElement)) {
      throw new Error('Form not found');
    }

    this.$element = $element;
    this.$element.addEventListener('submit', (event) => {
      this.handleSubmit(event);
    });

    this.onSubmit = (): void => {};
  }

  private handleSubmit(this: this, event: SubmitEvent): void {
    event.preventDefault();

    const formData = new FormData(this.$element);
    const data: { [key: string]: string } = {};

    formData.forEach((value, prop) => {
      data[prop] = value.toString();
    });

    this.onSubmit(data);
  }
}

export { Form };
