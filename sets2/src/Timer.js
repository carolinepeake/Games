import React, { useState, useEffect } from 'react';

// import './index.css';
// import './App.css';
import './Timer.css';

type TimerProps = {
  status: 'idle' | 'started' | 'paused' | 'resumed' | 'ended';
  // handleClickPause:
};

export const Timer = ({
  status,
  handleClickPause
 }: TimerProps) => {

  const [elapsedSecs, setElapsedSecs] = useState(0);

  useEffect(() => {
    let interval;

    if (status === 'started' || status === 'resumed') {
      interval = setInterval(() => {
          setElapsedSecs(prevSecs => prevSecs + 1);
      }, 1000);

    } else if (status === 'idle') {
      setElapsedSecs(0)
    }

    return () => clearInterval(interval);

  }, [status]);

  let timerText = Math.floor(elapsedSecs / 60) + ':' + ('0' + (elapsedSecs % 60)).slice(-2);
  if (elapsedSecs >= 3600) {
    timerText = Math.floor(elapsedSecs / 3600) + ':' + timerText;
  };

  const buttonText = status === 'paused' ? 'Resume' : status === 'started' || status === 'resumed' ? 'Pause' : '';

  return (
    <div className="timer">
      <span>{timerText}</span>
      <button
      className="btn pause"
      onClick={handleClickPause}
    >
      {buttonText}
    </button>
  </div>
  );
};