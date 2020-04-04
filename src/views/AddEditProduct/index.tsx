import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';

import ProductForm from '../../components/ProductForm';

import './styles.scss';

interface Props {
  match: {
    url: string;
    params: {
      id?: number;
    };
  };
}

const AddEditProduct: FunctionComponent<Props> = (props: Props) => {
  const {
    match: {
      url,
      params: { id: productId },
    },
  } = props;

  const [product, getProduct] = useState(null);

  useEffect(() => {
    if (url.includes('edit')) {
      axios
        .get(`http://localhost:5000/api/product/${productId}`)
        .then(({ data }) => getProduct(data));
    }
  }, [productId, url]);

  return (
    <div className="add-edit-product-container">
      <ProductForm product={product} />
    </div>
  );
};

export default AddEditProduct;
