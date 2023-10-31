import React from 'react';
import { Timer } from './Timer';
import styled, { css } from 'styled-components';
import './index.css';
import './App.css';
import { Button } from './StyledComponents';

type HeaderProps = {
  gameStatus: 'idle' | 'started' | 'paused' | 'resumed' | 'ended';
  setGameStatus: React.Dispatch<React.SetStateAction<string>>;
};

export default function Header({ gameStatus, setGameStatus }: HeaderProps) {

  // TO-DO: have floating deal button and then after facedown cards are dealt have floating start game button slide in from the top
    // have the button have a box-shadow and get bigger and smaller over a period of seconds to look as if it's floating
    // might also want to put a glow behind it

    const handleStartEndGame = () => {
      if (gameStatus === 'idle' || gameStatus === 'ended') {
        setGameStatus('started');
      } else {
        setGameStatus('ended');
      }
    };

    const handlePauseGame = () => {
      gameStatus === 'paused' ? setGameStatus('resumed') : setGameStatus('paused');
    };

    const LeftButtonText = gameStatus === 'ended' || gameStatus === 'idle' ? 'Start Game' : 'End Game';

    const RightButtonText = gameStatus === 'paused' ? 'Resume Game' : gameStatus === 'started' || gameStatus === 'resumed' ? 'Pause Game' : '';



  return (
    <header className="App-header">
      <HeaderLeft className="header-item">
        <StyledButton
        $color="dark"
        onClick={handleStartEndGame}
        style={{display: gameStatus === 'ended' ? 'none' : 'flex'}}
        >
          {LeftButtonText}
        </StyledButton>
      </HeaderLeft>
      <h1 className="header-item" style={{textAlign: 'center', justifyContent: 'center' }}>SET</h1>
      <HeaderRight className="header-item">
        <StyledButton $color="light" onClick={handlePauseGame} style={{display: gameStatus ===  'idle' || gameStatus === 'ended' ? 'none' : 'flex'}}>{RightButtonText}</StyledButton>
        <Timer
        gameStatus={gameStatus}
        />
      </HeaderRight>
    </header>
  );
};

const HeaderRight = styled.div`
  justify-content: space-around;
  align-contents: flex-end;
`;
const HeaderLeft = styled.div`
  justify-content: left;
  margin-left: 2%;
`;

const StyledButton = styled(Button)`
  margin-bottom: 2%;
  ${(props) => {
    switch (props.$color) {
      case "dark":
        return css`
          background-color: var(--darkBtnColor);
          color: white;
          &:hover {
            background-color:
          }
        `;
      case "light":
        return css`
          background-color: var(--yellow);
          background-color: var(--lightBtnColor);
          color: white;
          &:hover {
            background-color:
          }
        `;
      default:
        return css`
          background-color: transparent;
          color: black;
          &:hover {
            background-color: gray;
          }
        `
    };
  }}
`;


