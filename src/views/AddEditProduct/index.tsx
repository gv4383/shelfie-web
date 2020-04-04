import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';

import ProductForm from '../../components/ProductForm';

import './styles.scss';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  id: string;
}

type Props = RouteComponentProps<MatchParams>;

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
      <ProductForm product={product} productId={productId} url={url} />
    </div>
  );
};

export default AddEditProduct;
