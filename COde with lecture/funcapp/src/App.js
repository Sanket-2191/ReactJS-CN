import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  const incCount = () => {
    setCounter((prev) => prev + 1);
  }

  const decCount = () => {
    if (counter >= 1) setCounter((prev) => prev - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={incCount} style={{ display: 'inline' }}>+</button> <span>{counter}</span> <button onClick={decCount} style={{ display: 'inline' }}>-</button>
      </header>
    </div>
  );
}

export default App;
