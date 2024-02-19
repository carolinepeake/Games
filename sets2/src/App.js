import React, { useReducer } from 'react';
// import styled from 'styled-components';
import { Board } from './Board/Board.js';
import Header from './Header';
import './App.css';
import './index.css';
// import { Button } from './StyledComponents';
import { gameReducer, getInitialState } from './State/gameReducer';

// TODO: need to memoize Board or move props that are changing b/c Board is getting rerendered every time a move is made

const App = () => {

  const [state, dispatch] = useReducer(gameReducer, getInitialState());

  function handleSelectDifficulty(level = '1') {
    dispatch({type: 'SELECT_DIFFICULTY', payload: level});
  }

  return (
    <div className="App">
      <Header
          handleSelectDifficulty={handleSelectDifficulty}
          difficulty={state.difficulty}
      />
      <div className="App-main">
          <Board
            status={state.status}
            difficulty={state.difficulty}
            deck={state.deck}
          />
      </div>
    </div>
  );
}

export default App;

// const StyledButton = styled(Button)`
//   background-color: var(--darkBtnColor);
//   font-size: 32px;
//   display: inline-block;ß
// `;
