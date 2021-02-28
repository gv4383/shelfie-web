import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

import ProductForm from '../../components/ProductForm';
import { Product } from '../../types';
import { formatFetchedProduct } from '../../utils/api';

import './styles.scss';

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

  const [product, setProduct] = useState({} as Product);

  useEffect(() => {
    if (url.includes('edit')) {
      axios
        .get(`http://localhost:5000/api/products/${productId}`)
        .then(({ data }) => setProduct(formatFetchedProduct(data)));
    }
  }, [productId, url]);

  return (
    <div className="add-edit-product-container">
      <ProductForm product={product} productId={productId} url={url} />
    </div>
  );
};

export default AddEditProduct;
