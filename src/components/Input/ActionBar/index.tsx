import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Input/Button';

import './styles.scss';

interface Props {
  buttonColor: 'red' | 'green';
  isRightButtonLink?: boolean;
  leftButtonText: string;
  onClickLeft: () => void;
  onClickRight?: () => void;
  productId?: number;
  rightButtonText: string;
}

const ActionBar: FunctionComponent<Props> = (props: Props) => {
  const {
    buttonColor,
    isRightButtonLink,
    leftButtonText,
    onClickLeft,
    onClickRight,
    productId,
    rightButtonText,
  } = props;

  const displayRightButton = isRightButtonLink ? (
    <Link to={`/edit/${productId}`}>
      <Button color={buttonColor} onClick={onClickRight}>
        {rightButtonText}
      </Button>
    </Link>
  ) : (
    <Button color={buttonColor} onClick={onClickRight}>
      {rightButtonText}
    </Button>
  );

  return (
    <div className="base-action-bar">
      <Button color={buttonColor} onClick={onClickLeft}>
        {leftButtonText}
      </Button>
      {displayRightButton}
    </div>
  );
};

export default ActionBar;
