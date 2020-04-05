import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Input/Button';

import './styles.scss';

interface Props {
  buttonColor: 'red' | 'green';
  isAddOrEditCard?: boolean;
  leftButtonText: string;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  productId?: number;
  rightButtonText: string;
}

const ActionBar: FunctionComponent<Props> = (props: Props) => {
  const {
    buttonColor,
    isAddOrEditCard,
    leftButtonText,
    onClickLeft,
    onClickRight,
    productId,
    rightButtonText,
  } = props;

  const linkRoute = isAddOrEditCard ? '/' : `/edit/${productId}`;

  const displayLeftButton = isAddOrEditCard ? (
    <Link to="/">
      <Button color={buttonColor}>{leftButtonText}</Button>
    </Link>
  ) : (
    <Button color={buttonColor} onClick={onClickLeft}>
      {leftButtonText}
    </Button>
  );

  return (
    <div className="base-action-bar">
      {displayLeftButton}
      <Link to={linkRoute}>
        <Button color={buttonColor} onClick={onClickRight}>
          {rightButtonText}
        </Button>
      </Link>
    </div>
  );
};

export default ActionBar;
