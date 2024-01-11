import React from 'react';
import './index.css';
import './App.css';
import Difficulty from './Difficulty';

type HeaderProps = {
  gameStatus: 'idle' | 'started' | 'paused' | 'resumed' | 'ended';
  setGameStatus: React.Dispatch<React.SetStateAction<string>>;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  // setDeck
};

export default function Header({
  gameStatus,
  setGameStatus,
  difficulty,
  setDifficulty,
  setDeck,
}: HeaderProps) {

  // TO-DO: have floating deal button and then after facedown cards are dealt have floating start game button slide in from the top
    // have the button have a box-shadow and get bigger and smaller over a period of seconds to look as if it's floating
    // might also want to put a glow behind it

    const handleEndGame = () => {
      setDeck([]);
      // let timeout;
      // if (gameStatus !== 'ended') {
      //   timeout = setTimeout(() => {
      //     setGameStatus('ended')}, 5000);
      // }
      // return () => clearTimeout(timeout);
      setGameStatus('ended');
    };

  return (
    <header className="App-header">
      <h1 className="header-logo">SET</h1>
      <div className="header-links">
        <a className="header-link" href="https://www.wikihow.com/Play-SET" target="_blank" rel="noreferrer">tutorial</a>
        {/* <span className="header-link">games</span> */}
        <Difficulty
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
        <span
          className="header-link header-button"
          onClick={handleEndGame}
        >
          quit
        </span>
      </div>
    </header>
  );
};







