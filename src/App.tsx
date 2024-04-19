import React from 'react';
import logo from './logo.svg';
import { ReactComponent as Icon } from './logo.svg';
import './App.scss';

const PASSWORD = process.env.REACT_APP_PASSWORD;

function App() {
  console.log(PASSWORD)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save!!!
          <Icon/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
