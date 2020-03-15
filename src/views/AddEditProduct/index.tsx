import React, { FunctionComponent } from 'react';

import ProductForm from '../../components/ProductForm';

import './styles.scss';

const AddEditProduct: FunctionComponent = () => (
  <div className="add-edit-product-container">
    <ProductForm />
  </div>
);

export default AddEditProduct;
