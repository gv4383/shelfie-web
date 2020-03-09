import React, { FunctionComponent } from 'react';

import ProductForm from '../../components/ProductForm';

import './styles.scss';

const AddProduct: FunctionComponent = () => (
  <div className="add-product-container">
    <ProductForm />
  </div>
);

export default AddProduct;
