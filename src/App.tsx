import React, { FunctionComponent } from 'react';
// import logo from './logo.svg';
import ProductForm from './components/ProductForm';

import './App.scss';

const App: FunctionComponent = () => (
  <div className="App">
    {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header> */}
    <ProductForm />
  </div>
);

export default App;
