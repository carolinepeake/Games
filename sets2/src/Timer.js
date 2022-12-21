import React, { useState, useEffect } from 'react';

export const Timer = ({ isStarted, isPaused }) => {

  const [elapsedSecs, setElapsedSecs] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (isStarted && !isPaused) {
        // might want to just make a note of the date/time when the game is started, and notes when paused/resumed, and calculate the seconds elapsed
        // might be more accurate b/c if isPaused before has a chance to update state and re-render, may clear interval and not update state
        setElapsedSecs(prevSecs => prevSecs + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isStarted, isPaused])

  let timerText = Math.floor(elapsedSecs / 60) + ':' + ('0' + (elapsedSecs % 60)).slice(-2);
  if (elapsedSecs >= 3600) {
    timerText = Math.floor(elapsedSecs / 3600) + ':' + timerText;
  };

  return (
    <div >{timerText}</div>
  );
};