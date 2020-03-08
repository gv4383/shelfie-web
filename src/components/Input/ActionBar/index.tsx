import React, { FunctionComponent } from 'react';

import Button from '../../Input/Button';

import './styles.scss';

interface Props {
  buttonColor: 'red' | 'green';
  leftButtonText: string;
  onClickLeft: () => void;
  onClickRight?: () => void;
  rightButtonText: string;
}

const ActionBar: FunctionComponent<Props> = (props: Props) => {
  const { buttonColor, leftButtonText, onClickLeft, onClickRight, rightButtonText } = props;

  return (
    <div className="base-action-bar">
      <Button color={buttonColor} onClick={onClickLeft}>
        {leftButtonText}
      </Button>
      <Button color={buttonColor} onClick={onClickRight}>
        {rightButtonText}
      </Button>
    </div>
  );
};

export default ActionBar;
