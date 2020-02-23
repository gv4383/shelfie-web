import React, { FunctionComponent } from 'react';

import './styles.scss';

interface Props {
  children: string;
  color: 'red' | 'green';
  onClick?: () => void;
}

const Button: FunctionComponent<Props> = (props: Props) => {
  const { children, color, onClick } = props;

  const getButtonColor = (): string => (color === 'red' ? 'red-color' : 'green-color');

  return (
    <button className={`base-button ${getButtonColor()}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
