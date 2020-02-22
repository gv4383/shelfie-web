import React, { FunctionComponent } from 'react';

import Button from '../../Input/Button';

const ActionBar: FunctionComponent = () => (
  <div className="root">
    <Button color="red">Cancel</Button>
    <Button color="red">Save Changes</Button>
  </div>
);

export default ActionBar;
