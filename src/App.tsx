import React, { FunctionComponent } from 'react';
import { HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './components/Routes';

import './App.scss';

const App: FunctionComponent = () => (
  <div className="App">
    <HashRouter>
      <header>
        <Header />
      </header>
      <Routes />
    </HashRouter>
  </div>
);

export default App;
