import React, { Fragment, FunctionComponent } from 'react';

interface Props {
  formId: string;
  name: string;
  placeholder?: string;
  type: 'text' | 'url' | 'number';
  value: string | number;
}

const TextInput: FunctionComponent<Props> = (props: Props) => {
  const { formId, name, placeholder, type = 'text', value } = props;

  return (
    <Fragment>
      <input form={formId} name={name} placeholder={placeholder} type={type} value={value} />
    </Fragment>
  );
};

export default TextInput;
