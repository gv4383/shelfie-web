import React, { ChangeEvent, FunctionComponent, useState } from 'react';

import ActionBar from '../Input/ActionBar';
import TextInput from '../Input/TextInput';

import './styles.scss';

const ProductForm: FunctionComponent = () => {
  const formInitialState = {
    imageUrl: '',
    productName: '',
    price: 0,
  };
  const [formInputs, setformInputs] = useState(formInitialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setformInputs({ ...formInputs, [name]: value });
  };

  const displayInputFields = (
    <div className="base-product-form">
      <TextInput
        label="Image URL"
        name="imageUrl"
        onChange={handleChange}
        value={formInputs.imageUrl}
      />
      <TextInput
        label="Product Name"
        name="productName"
        onChange={handleChange}
        value={formInputs.productName}
      />
      <TextInput
        label="Price"
        name="price"
        onChange={handleChange}
        type="number"
        value={formInputs.price}
      />
    </div>
  );

  return (
    <div>
      {displayInputFields}
      <ActionBar />
    </div>
  );
};

export default ProductForm;
