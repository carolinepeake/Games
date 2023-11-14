import React from 'react';
import styled from 'styled-components';
import { Button } from './StyledComponents.js';

export default function PauseBtn({ gameStatus, setGameStatus }) {

  const handlePauseGame = () => {
    gameStatus === 'paused' ? setGameStatus('resumed') : setGameStatus('paused');
  };

  const RightButtonText = gameStatus === 'paused' ? 'Resume' : gameStatus === 'started' || gameStatus === 'resumed' ? 'Pause' : '';

  return (
    <PauseButton $color="light" onClick={handlePauseGame} style={{display: gameStatus ===  'idle' || gameStatus === 'ended' ? 'none' : 'flex'}}>{RightButtonText}</PauseButton>
  );
}

const PauseButton = styled(Button)`
  color: #165bfb;
  border: 1px #165bfb solid;
`;