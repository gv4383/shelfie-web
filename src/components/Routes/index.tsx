import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../../views/Dashboard';
import AddEditProduct from '../../views/AddEditProduct';

const Routes: FunctionComponent = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/add" component={AddEditProduct} />
    <Route path="/edit/:id" component={AddEditProduct} />
  </Switch>
);

export default Routes;
