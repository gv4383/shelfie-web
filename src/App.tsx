import React, { FunctionComponent } from 'react';
// import logo from './logo.svg';
import Navbar from './components/Header';
import Dashboard from './views/Dashboard';
import AddProduct from './views/AddProduct';

import './App.scss';

const App: FunctionComponent = () => (
  <div className="App">
    <header>
      <Navbar />
    </header>
    <Dashboard />
    <AddProduct />
  </div>
);

export default App;
