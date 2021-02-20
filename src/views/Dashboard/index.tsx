import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

import ProductCard from '../../components/ProductCard';
import { Product } from '../../types';
import { formatFetchedInventory } from '../../utils/api';

import './styles.scss';

type Props = RouteComponentProps;

const Dashboard: FunctionComponent<Props> = (props: Props) => {
  const {
    location: { pathname },
  } = props;
  const [inventory, setInventory] = useState([] as Product[]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/inventory')
      .then(({ data }) => setInventory(formatFetchedInventory(data)));
  }, [pathname]);

  const displayInventory = inventory.map((product: Product) => {
    const { id, imageUrl, name, price } = product;

    return (
      <ProductCard
        key={id}
        imageUrl={imageUrl}
        productId={id}
        name={name}
        price={price}
        setInventory={setInventory}
      />
    );
  });

  return <div className="dashboard-container">{displayInventory}</div>;
};

export default Dashboard;
