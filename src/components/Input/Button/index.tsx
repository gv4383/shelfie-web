import React, { FunctionComponent } from 'react';

import './Button.scss';

interface Props {
  children: string;
  color: 'red' | 'green';
  onClick?: () => void;
}

const Button: FunctionComponent<Props> = (props: Props) => {
  const { children, color, onClick } = props;

  const getButtonColor = (): string => (color === 'red' ? 'red-color' : 'green-color');

  return (
    <button className={`root ${getButtonColor()}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
