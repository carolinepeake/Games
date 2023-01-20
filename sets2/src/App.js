import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Board } from './Board';
import { Header } from './Header';
import './App.css';
import './index.css';
import { createDeck, shuffleDeck } from './State/createGame';
import { Button } from './StyledComponents';


function App() {

  useEffect(() => {
    initGame();
  }, []);

  // let deck;
  const [deck, setDeck] = useState([]);

  const initGame = () => {
    // setGameStatus('started');
    // return shuffled deck
  //  deck = shuffleDeck(createDeck());
    setDeck(shuffleDeck(createDeck()));
  };

  const restartGame = (e) => {
    e.preventDefault();
    initGame();
    setGameStatus('idle');
    setFlip('');
    setGameStatus('idle');
  };

  const [gameStatus, setGameStatus] = useState('idle');

  // const [isStarted, setIsStarted] = useState(false);
  const [flip, setFlip] = useState('');
  // const [deck, setDeck] = useState(shuffledDeck);

  return (
    <div className="App">
      <Header
      // isStarted={isStarted} setIsStarted={setIsStarted}
      setFlip={setFlip} flip={flip} setGameStatus={setGameStatus} gameStatus={gameStatus}/>
      <div className="App-main">
        {gameStatus === 'ended'
        ? (<div>
            <StyledButton type="button"
              onClick={e => restartGame(e)}
            >
              Play Again!
            </StyledButton>
          </div>)
        : <Board
        // isStarted={isStarted}
        gameStatus={gameStatus}
        flip={flip}
        deck={deck}
        setDeck={setDeck}
        />}
      </div>
    </div>
  );
}

export default App;

const StyledButton = styled(Button)`
  background-color: var(--darkBtnColor);
  font-size: 32px;
  border: solid black thin;
`;
