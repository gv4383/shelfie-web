import React, { FunctionComponent } from 'react';

import Navbar from '../Navbar';
import logo from '../../assets/shelfie_icon.png';

import './styles.scss';

const Header: FunctionComponent = () => (
  <div className="header-container">
    <img className="nav-logo" alt="Shelfie Logo" src={logo} />
    <h2 className="nav-title">SHELFIE</h2>
    <Navbar />
  </div>
);

export default Header;
