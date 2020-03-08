import React, { FunctionComponent } from 'react';
import { HashRouter } from 'react-router-dom';

// import logo from './logo.svg';
import Navbar from './components/Header';
import Routes from './components/Routes';

import './App.scss';

const App: FunctionComponent = () => (
  <div className="App">
    <header>
      <Navbar />
    </header>
    <HashRouter>
      <Routes />
    </HashRouter>
  </div>
);

export default App;
