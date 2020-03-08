import React, { FunctionComponent } from 'react';

import logo from '../../assets/shelfie_icon.png';

import './styles.scss';

const Navbar: FunctionComponent = () => (
  <div className="navbar-container">
    <img className="nav-logo" src={logo} />
    <h2 className="nav-title">SHELFIE</h2>
  </div>
);

export default Navbar;
