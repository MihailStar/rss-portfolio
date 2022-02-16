import { Form } from './form/form';

const form = new Form('.contacts__form .form');

form.onSubmit = (data): void => {
  console.log(JSON.stringify(data, undefined, '  '));
};
