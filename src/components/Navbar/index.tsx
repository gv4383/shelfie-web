import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Input/Button';

const Navbar: FunctionComponent = () => {
  return (
    <div>
      <Link to="/">
        <Button color="red">Dashboard</Button>
      </Link>
      <Link to="/add">
        <Button color="red">Add Inventory</Button>
      </Link>
    </div>
  );
};

export default Navbar;
