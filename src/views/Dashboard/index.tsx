import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

import ProductCard from '../../components/ProductCard';
import { Product } from '../../types';

import './styles.scss';

type Props = RouteComponentProps;

const Dashboard: FunctionComponent<Props> = (props: Props) => {
  const {
    location: { pathname },
  } = props;
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/inventory').then(({ data }) => setInventory(data));
  }, [pathname]);

  const displayInventory = inventory.map((product: Product) => {
    const { id, name, price } = product;

    return (
      <ProductCard key={id} productId={id} name={name} price={price} setInventory={setInventory} />
    );
  });

  return <div className="dashboard-container">{displayInventory}</div>;
};

export default Dashboard;
