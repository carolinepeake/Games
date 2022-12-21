import React, { useState } from 'react';
import { Timer } from './Timer';
import styled, { css } from 'styled-components';
import './index.css';
import './App.css';
import { Button } from './StyledComponents';

export const Header = ({ isStarted, setIsStarted, setFlip, flip }) => {

  // have floating deal button and then after facedown cards are dealt have floating start game button slide in from the top
  // have the button have a box-shadow and get bigger and smaller over a period of seconds to look as if it's floating
  // might also want to put a glow behind it

   // look at travel blog to determine how to make text change on boolean
  // let buttonText = '';
  // isStarted ? 'Pause Game' : 'Start Game'

  // const [buttonText, setButtonText] = useState('Start Game')

  const [gameOver, setGameOver] = useState(false);

  const handleStartEndGame = (e) => {
    isStarted && setGameOver(true);
    setIsStarted(prev => !prev);
    if (flip === '' || flip === undefined) {
      setFlip('flip')
    } else if (flip === 'flip') {
      setFlip('unflip')
    } else if (flip === 'unflip') {
      setFlip('flip')
    }

    e.preventDefault();
  };

  let startEndButtonText;
  isStarted ? startEndButtonText = 'End Game' : startEndButtonText = 'Start Game';

  const [isPaused, setIsPaused] = useState(false);
  const handlePauseGame = () => {
    setIsPaused(prev => !prev);
    if (flip === 'flip') {
      setFlip('unflip')
    } else if (flip === 'unflip') {
      setFlip('flip')
    }
  };
  let pauseButtonText;
  isPaused ? pauseButtonText = 'Resume Game' : pauseButtonText = 'Pause Game';

  return (
    <header className="App-header">
      <HeaderLeft className="header-item">
        <StyledButton className="button" $color="dark" type="button" onClick={e => handleStartEndGame(e)}>{startEndButtonText}</StyledButton>
      </HeaderLeft>
      <h1 className="header-item">SET</h1>
      <HeaderRight className="header-item">
        <StyledButton className="button" type="button" $color="light" onClick={e => handlePauseGame(e)} style={{display: isStarted ? 'flex' : 'none'}}>{pauseButtonText}</StyledButton>
        <Timer isStarted={isStarted} isPaused={isPaused}/>
      </HeaderRight>
    </header>
  );
};

const HeaderRight = styled.div`
  justify-content: space-around;
  align-contents: flex-end;
`
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

`
