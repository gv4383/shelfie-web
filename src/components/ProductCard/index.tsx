import React, { FunctionComponent } from 'react';
import axios from 'axios';

import ActionBar from '../Input/ActionBar';
import { formatFetchedInventory } from '../../utils/api';

import './styles.scss';

interface Props {
  imageUrl: string;
  productId: number;
  name: string;
  price: number;
  setInventory: (data: any) => void;
}

const ProductCard: FunctionComponent<Props> = (props: Props) => {
  const { imageUrl, name, productId, price, setInventory } = props;

  const handleLeftOnClick = (): void => {
    axios
      .delete(`http://localhost:5000/api/products/${productId}`)
      .then(() =>
        axios
          .get('http://localhost:5000/api/inventory')
          .then(({ data }) => setInventory(formatFetchedInventory(data))),
      );
  };

  return (
    <div className="base-product-card">
      <div>
        <img className="product-card-image" src={imageUrl} alt={name} />
      </div>
      <div>
        <div className="product-card-info">
          <div>
            <p>{name}</p>
            <p>{`$${price}`}</p>
          </div>
          <ActionBar
            buttonColor="green"
            leftButtonText="Delete"
            onClickLeft={handleLeftOnClick}
            productId={productId}
            rightButtonText="Edit"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
