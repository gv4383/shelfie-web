import React, { ChangeEvent, Fragment, FunctionComponent } from 'react';

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
    <Fragment>
      <input
        form={formId}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </Fragment>
  );
};

export default TextInput;
