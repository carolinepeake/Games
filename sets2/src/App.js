import React, { useState } from 'react';
import styled from 'styled-components';
import { Board } from './Board';
import { Header } from './Header';
import './App.css';
import './index.css';
import { Button } from './StyledComponents';

const App = () => {

  const [gameStatus, setGameStatus] = useState('idle');

  const handleStartEndGame = () => {
    if (gameStatus === 'idle' || gameStatus === 'ended') {
      setGameStatus('started');
    } else {
      setGameStatus('ended');
    }
  };

  const handlePauseGame = () => {
    gameStatus === 'paused' ? setGameStatus('resumed') : setGameStatus('paused');
  };

  const restartGame = () => {
    setGameStatus('idle');
  };


  return (
    <div className="App">
      <Header
        handlePauseGame={handlePauseGame}
        handleStartEndGame={handleStartEndGame}
        // setGameStatus={setGameStatus}
        gameStatus={gameStatus}
      />

      <div className="App-main">
        {gameStatus === 'ended'
        ? <StyledButton
            type="button"
            onClick={restartGame}
          >
            Play Again!
          </StyledButton>
        : <Board
            gameStatus={gameStatus}
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
