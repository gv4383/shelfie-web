import React, { FunctionComponent } from 'react';
import { HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './components/Routes';

import './App.scss';

const App: FunctionComponent = () => (
  <div className="App">
    <header>
      <Header />
    </header>
    <HashRouter>
      <Routes />
    </HashRouter>
  </div>
);

export default App;
