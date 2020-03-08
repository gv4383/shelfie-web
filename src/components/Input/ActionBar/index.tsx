import React, { FunctionComponent } from 'react';

import Button from '../../Input/Button';

import './styles.scss';

interface Props {
  buttonColor: 'red' | 'green';
  leftButtonText: string;
  rightButtonText: string;
}

const ActionBar: FunctionComponent<Props> = (props: Props) => {
  const { buttonColor, leftButtonText, rightButtonText } = props;

  return (
    <div className="base-action-bar">
      <Button color={buttonColor}>{leftButtonText}</Button>
      <Button color={buttonColor}>{rightButtonText}</Button>
    </div>
  );
};

export default ActionBar;
