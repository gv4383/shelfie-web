import React, { FunctionComponent } from 'react';

import Button from '../../Input/Button';

import './styles.scss';

const ActionBar: FunctionComponent = () => (
  <div className="base-action-bar">
    <Button color="red">Cancel</Button>
    <Button color="red">Save Changes</Button>
  </div>
);

export default ActionBar;
