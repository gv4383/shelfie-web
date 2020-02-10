import React, { ChangeEvent, FunctionComponent, useState } from 'react';
// import logo from './logo.svg';
import TextInput from './components/Input/TextInput';

import './App.scss';

const App: FunctionComponent = () => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setUserInput(value);
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TextInput name="input" onChange={handleChange} value={userInput} />
    </div>
  );
};

export default App;
