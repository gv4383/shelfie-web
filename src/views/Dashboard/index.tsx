import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';

import ProductCard from '../../components/ProductCard';
import { Product } from '../../types';

import './styles.scss';

const Dashboard: FunctionComponent = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/inventory').then(({ data }) => setInventory(data));
  }, []);

  const displayInventory = inventory.map((product: Product) => {
    const { id, name, price } = product;

    return (
      <ProductCard key={id} productId={id} name={name} price={price} setInventory={setInventory} />
    );
  });

  return <div className="dashboard-container">{displayInventory}</div>;
};

export default Dashboard;
