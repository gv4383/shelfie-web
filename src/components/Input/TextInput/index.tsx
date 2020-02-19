import React, { ChangeEvent, FunctionComponent } from 'react';

interface Props {
  formId?: string;
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'url' | 'number';
  value: string | number;
}

const TextInput: FunctionComponent<Props> = (props: Props) => {
  const { formId, name, onChange, placeholder, type = 'text', value } = props;

  return (
    <input
      form={formId}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

export default TextInput;
