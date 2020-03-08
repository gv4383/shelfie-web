import React, { FunctionComponent } from 'react';

import ProductCard from '../../components/ProductCard';

import './styles.scss';

const Dashboard: FunctionComponent = () => (
  <div className="dashboard-container">
    <ProductCard name="Stanky Shoe" price={1.29} />
  </div>
);

export default Dashboard;
