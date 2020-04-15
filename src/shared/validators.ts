type TValidationFunction = (value: string) => string | boolean;

export const validateAll = (functions: TValidationFunction[]) => (
  value: string
) =>
  functions
    .map((func: TValidationFunction) => func(value))
    .filter((v: string | boolean) => v)[0];

export const isRequired = (value: string) => {
  if (value) {
    return false;
  }
  return 'This field is required';
};

export const isEmail = (value: string) => {
  // modified version of the RFC 2822
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (value && regex.test(value.toLocaleLowerCase())) {
    return false;
  }
  return 'Please enter valid e-mail address';
};
