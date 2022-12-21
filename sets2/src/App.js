import React, { useState } from 'react';
import { Board } from './Board';
import { Header } from './Header';
import './App.css';


function App() {

  const [isStarted, setIsStarted] = useState(false);
  const [flip, setFlip] = useState('');

  return (
    <div className="App">
      <Header isStarted={isStarted} setIsStarted={setIsStarted} setFlip={setFlip} flip={flip}/>
      <div className="App-main">
        <Board isStarted={isStarted} flip={flip}/>
      </div>
    </div>
  );
}

export default App;
