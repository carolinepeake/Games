import React, { useState } from 'react';
import styled from 'styled-components';
import './index.css';
import './App.css';

export const StartButton = () => {
  const [gameStatus, setGameStatus] = useState('idle');
  // 'started', 'paused', 'ended'
    // whether cards are flipped
    // text on buttons
    // whether time restarts, stops, or resumes
      // start and resume will never be together, so can have started, paused, ended
      // initial state {
      //   timer: 0:00,
      //   left button: start game,
      //   right button: not displayed,
      //   cards will be face down (new card array tho)
      // }
        // and if game is ended {
          //timer will be paused,
          // left button: start new game,
          // right button: not displayed
          // collect cards

       // }
        //  if game is started {
        //   timer: run from wherever it was,
        //   left button will say end game,
        //   right button will say pause game
        //   cards will be face up
        //  }
        //  if game is paused {
        //   timer wil be paused,
        //   left button will say end game,
        //   right button will say resume game,
        //   cards will be face down
        //  }

        // if game  is restarted, initial state will be restored





  return (
<StartButton className="button" type="button" onClick={e => handleStartGame(e)} >Start Game</StartButton>
  )
};
