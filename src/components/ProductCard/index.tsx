import React, { FunctionComponent } from 'react';

import ActionBar from '../Input/ActionBar';

import './styles.scss';

interface Props {
  name: string;
  price: number;
}

const ProductCard: FunctionComponent<Props> = (props: Props) => {
  const { name, price } = props;

  return (
    <div className="base-product-card">
      <p>{name}</p>
      <p>{`$${price}`}</p>
      <ActionBar buttonColor="green" leftButtonText="Delete" rightButtonText="Edit" />
    </div>
  );
};

export default ProductCard;
