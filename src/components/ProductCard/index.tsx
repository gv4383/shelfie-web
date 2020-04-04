import React, { FunctionComponent } from 'react';
import axios from 'axios';

import ActionBar from '../Input/ActionBar';

import './styles.scss';

interface Props {
  productId: number;
  name: string;
  price: number;
  setInventory: (data: any) => void;
}

const ProductCard: FunctionComponent<Props> = (props: Props) => {
  const { productId, name, price, setInventory } = props;

  const handleLeftOnClick = (): void => {
    axios
      .delete(`http://localhost:5000/api/product/${productId}`)
      .then(() =>
        axios.get('http://localhost:5000/api/inventory').then(({ data }) => setInventory(data)),
      );
  };

  return (
    <div className="base-product-card">
      <p>{name}</p>
      <p>{`$${price}`}</p>
      <ActionBar
        buttonColor="green"
        isRightButtonLink={true}
        leftButtonText="Delete"
        onClickLeft={handleLeftOnClick}
        productId={productId}
        rightButtonText="Edit"
      />
    </div>
  );
};

export default ProductCard;
