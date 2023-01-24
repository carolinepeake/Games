import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Board } from './Board';
import { Header } from './Header';
import './App.css';
import './index.css';
import { unshuffledDeck, shuffleDeck } from './State/createGame';
import { Button } from './StyledComponents';


function App() {

  useEffect(() => {
    initGame();
  }, []);

  const [deck, setDeck] = useState([]);

  const initGame = () => {
    // setGameStatus('started');
    // return shuffled deck
  //  deck = shuffleDeck(createDeck());
    setDeck(shuffleDeck(unshuffledDeck));
  };

  const restartGame = (e) => {
    e.preventDefault();
    initGame();
    setGameStatus('idle');
  };

  const [gameStatus, setGameStatus] = useState('idle');

  // const [deck, setDeck] = useState(shuffledDeck);

  return (
    <div className="App">
      <Header
       setGameStatus={setGameStatus} gameStatus={gameStatus}/>
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
        gameStatus={gameStatus}
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
