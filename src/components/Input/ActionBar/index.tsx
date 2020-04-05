import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Input/Button';

import './styles.scss';

interface Props {
  buttonColor: 'red' | 'green';
  isAddOrEditCard?: boolean;
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
    isAddOrEditCard,
    isRightButtonLink,
    leftButtonText,
    onClickLeft,
    onClickRight,
    productId,
    rightButtonText,
  } = props;

  const displayLeftButton = isAddOrEditCard ? (
    <Link to="/">
      <Button color={buttonColor}>{leftButtonText}</Button>
    </Link>
  ) : (
    <Button color={buttonColor} onClick={onClickLeft}>
      {leftButtonText}
    </Button>
  );

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
      {displayLeftButton}
      {displayRightButton}
    </div>
  );
};

export default ActionBar;
