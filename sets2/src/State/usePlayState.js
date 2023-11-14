import { useState } from 'react';

const usePlayState = () => {

  const [gameStatus, setGameStatus] = useState('idle');

  const restartGame = () => {
    setGameStatus('idle');
  };

  return [gameStatus, setGameStatus, restartGame];
}

