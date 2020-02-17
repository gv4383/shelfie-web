import React, { Fragment, FunctionComponent } from 'react';

interface Props {
  children: string;
  onClick?: () => void;
}

const Button: FunctionComponent<Props> = (props: Props) => {
  const { children, onClick } = props;

  return (
    <Fragment>
      <button onClick={onClick}>{children}</button>
    </Fragment>
  );
};

export default Button;
