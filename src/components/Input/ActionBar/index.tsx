import React, { FunctionComponent } from 'react';

import Button from '../../Input/Button';

import './styles.scss';

interface Props {
  buttonColor: 'red' | 'green';
}

const ActionBar: FunctionComponent<Props> = (props: Props) => {
  const { buttonColor } = props;

  return (
    <div className="base-action-bar">
      <Button color={buttonColor}>Cancel</Button>
      <Button color={buttonColor}>Save Changes</Button>
    </div>
  );
};

export default ActionBar;
