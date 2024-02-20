import React, { useReducer, useRef, useState } from 'react';

import { Board } from './Board/Board.js';
import Header from './Header/Header';
import { gameReducer, getInitialState } from './State/gameReducer';

import './App.css';
import './index.css';


// TODO: need to memoize Board or move props that are changing b/c Board is getting rerendered every time a move is made

const App = () => {

  const [state, dispatch] = useReducer(gameReducer, getInitialState());

  const handleStartGame = () => {
    dispatch({type: 'START'});
  };

  const handleQuitGame = () => {
    dispatch({type: 'QUIT'});
  };

  const handleClickPause = () => {
    state.status === 'paused' ? dispatch({type: 'RESUME'}) : dispatch({type: 'PAUSE'});
    // move clearing interval to inside of reducer logic and maintain intervalId in gameState
    // return () => clearInterval(intervalId.current);
  };

  const handleSelectDifficulty = (level = '1') => {
    console.log('value: ', level);
    dispatch({type: 'SELECT_DIFFICULTY', payload: level});
  };

  // const intervalId = useRef(null);

  // const [timeRemaining, setTimeRemaining] = useState(10);


  const handleClickSet = (player = '01') => {
    dispatch({type: 'CLICK_SET', payload: player});
    // start 10 sec countdown
    // const id = setInterval(() => {
    //   dispatch({type: 'COUNTDOWN'});
    //   // setTimeRemaining(prevSecs => prevSecs - 1);
    // }, 1000);
    // intervalId.current = id;
    // // end timer (clear interval) if 3 cards are selected (so change in isSet); pause timer if game is paused; game is quit
    // return () => clearInterval(id);
  };

  const handleSelectCard = (card, index, player = '01') => {
    card.index = index;
    dispatch({type: 'SELECT_CARD', payload: { card, player }});
    // might not update state on time
    // if (state.selectedCards.length === 3) {
    //   return () => clearInterval(intervalId.current);
    // }
  };

  const handleClickAddCards = () => {
    dispatch({type: 'CLICK_ADD'});
  };

  return (
    <div className="App">
      <Header
        handleSelectDifficulty={handleSelectDifficulty}
        difficulty={state.difficulty}
        handleQuitGame={handleQuitGame}
      />
      <div className="App-main">
          <Board
            state={state}
            dispatch={dispatch}
            handleSelectCard={handleSelectCard}
            handleClickAddCards={handleClickAddCards}
            handleClickSet={handleClickSet}
            handleClickPause={handleClickPause}
            handleStartGame={handleStartGame}
          />
      </div>
    </div>
  );
}

export default App;
