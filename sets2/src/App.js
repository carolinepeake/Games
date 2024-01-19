import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Board } from './Board/Board.js';
import { Board2 } from './Board/Board2.js';
import Header from './Header';
import './App.css';
import './index.css';
import { Button } from './StyledComponents';

// TODO: need to memoize Board or move props that are changing b/c Board is getting rerendered every time a move is made

const App = () => {

  // const restartGame = () => {
  //   setGameStatus('idle');
  //   setDeck(shuffleDeck(unshuffledDeck));
  //   // setSelectedCards([]);
  //   // setActivePlayer('');
  //   // setExtraCards(false);
  //   // setP1Score(0);
  //   // setP2Score(0);
  // };

  return (
    <div className="App">
      {/* <Header
        setGameStatus={setGameStatus}
        gameStatus={gameStatus}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        setDeck={setDeck}
      /> */}

      <div className="App-main">
        {/* {gameStatus === 'ended'
        ? <StyledButton
            type="button"
            onClick={restartGame}
          >
            Play Again!
          </StyledButton>
        : <Board
            gameStatus={gameStatus}
            setGameStatus={setGameStatus}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            deck={deck}
            setDeck={setDeck}
          />} */}

          <Board2/>

{/* {gameStatus === 'ended'
        && <StyledButton
            type="button"
            onClick={restartGame}
          >
            Play Again!
          </StyledButton>}


           */}

      </div>

    </div>
  );
}

export default App;

const StyledButton = styled(Button)`
  background-color: var(--darkBtnColor);
  font-size: 32px;
  display: inline-block;ß
`;
