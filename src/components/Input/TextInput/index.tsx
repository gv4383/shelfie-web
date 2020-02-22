import React, { ChangeEvent, FunctionComponent } from 'react';

import './styles.scss';

interface Props {
  formId?: string;
  label?: string;
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'url' | 'number';
  value: string | number;
}

const TextInput: FunctionComponent<Props> = (props: Props) => {
  const { formId, label, name, onChange, placeholder, type = 'text', value } = props;

  const displayLabel = label && <p className="text-input-label">{label}</p>;

  return (
    <div className="base-text-input">
      {displayLabel}
      <input
        form={formId}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
};

export default TextInput;
