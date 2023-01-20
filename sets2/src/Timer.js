import React, { useState, useEffect } from 'react';

export const Timer = ({
  // isStarted, isPaused
  gameStatus
}) => {

  const [elapsedSecs, setElapsedSecs] = useState(0);

  useEffect(() => {
    gameStatus === 'idle' && setElapsedSecs(0);
  }, [gameStatus]);

  useEffect(() => {
    const interval = setInterval(() => {
      // if (gameStatus === 'started' || gameStatus === 'resumed' && !isPaused) {
      if (gameStatus === 'started' || gameStatus === 'resumed') {
        // might want to just make a note of the date/time when the game is started, and notes when paused/resumed, and calculate the seconds elapsed
        // might be more accurate b/c if isPaused before has a chance to update state and re-render, may clear interval and not update state
        setElapsedSecs(prevSecs => prevSecs + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  // }, [isStarted, isPaused])
  }, [gameStatus])

  let timerText = Math.floor(elapsedSecs / 60) + ':' + ('0' + (elapsedSecs % 60)).slice(-2);
  if (elapsedSecs >= 3600) {
    timerText = Math.floor(elapsedSecs / 3600) + ':' + timerText;
  };

  return (
    <div >{timerText}</div>
  );
};