import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Input/Button';

import './styles.scss';

const Navbar: FunctionComponent = () => {
  return (
    <div className="navbar-container">
      <Link className="dashboard-button" to="/">
        <Button color="red">Dashboard</Button>
      </Link>
      <Link className="add-button" to="/add">
        <Button color="red">Add Inventory</Button>
      </Link>
    </div>
  );
};

export default Navbar;
