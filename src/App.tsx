import React, { FunctionComponent } from 'react';
// import logo from './logo.svg';
import Navbar from './components/Header';
import ProductForm from './components/ProductForm';
import ProductCard from './components/ProductCard';

import './App.scss';

const App: FunctionComponent = () => (
  <div className="App">
    <header>
      <Navbar />
    </header>
    <ProductCard name="Stanky Shoe" price={1.29} />
    <ProductForm />
  </div>
);

export default App;
