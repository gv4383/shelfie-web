import React, { ChangeEvent, FunctionComponent, useState } from 'react';

import ActionBar from '../Input/ActionBar';
import TextInput from '../Input/TextInput';

import './styles.scss';

interface Props {
  classNames?: string;
}

const ProductForm: FunctionComponent<Props> = (props: Props) => {
  const formInitialState = {
    imageUrl: '',
    productName: '',
    price: 0,
  };
  const [formInputs, setformInputs] = useState(formInitialState);
  const { classNames } = props;

  const getClassNames = (): string => `base-product-form ${classNames}`;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setformInputs({ ...formInputs, [name]: value });
  };

  const handleLeftOnClick = (): void => console.log('Cancel');

  const handleRightOnClick = (): void => console.log('Add to Inventory');

  const displayInputFields = (
    <div className="product-form-input-container">
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
    <div className={getClassNames()}>
      {displayInputFields}
      <ActionBar
        buttonColor="red"
        leftButtonText="Cancel"
        onClickLeft={handleLeftOnClick}
        onClickRight={handleRightOnClick}
        rightButtonText="Add to Inventory"
      />
    </div>
  );
};

export default ProductForm;
