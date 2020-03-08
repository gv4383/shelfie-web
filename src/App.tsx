import React, { FunctionComponent } from 'react';
// import logo from './logo.svg';
import Navbar from './components/Header';
import Dashboard from './views/Dashboard';
import ProductForm from './components/ProductForm';

import './App.scss';

const App: FunctionComponent = () => (
  <div className="App">
    <header>
      <Navbar />
    </header>
    <Dashboard />
    <ProductForm />
  </div>
);

export default App;
