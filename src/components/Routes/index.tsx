import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../../views/Dashboard';
import AddProduct from '../../views/AddProduct';

const Routes: FunctionComponent = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/add" component={AddProduct} />
    <Route path="/edit/:id" component={AddProduct} />
  </Switch>
);

export default Routes;
