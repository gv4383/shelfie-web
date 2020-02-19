import React, { FunctionComponent } from 'react';

interface Props {
  children: string;
  onClick?: () => void;
}

const Button: FunctionComponent<Props> = (props: Props) => {
  const { children, onClick } = props;

  return <button onClick={onClick}>{children}</button>;
};

export default Button;
