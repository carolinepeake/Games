import React from 'react';
import { Timer } from './Timer';
import styled, { css } from 'styled-components';
import './index.css';
import './App.css';
import { Button } from './StyledComponents';

function LeftHeaderButton({ gameStatus, setGameStatus }) {
  const handleStartEndGame = () => {

  }

  console.log('headerprops: ', clickHandler, 'color: ', color, 'style :', style, 'text :', text);


  return (
    // <StyledButton onClick={props.clickHandler} className="button" type="button" $color={props.color} style={props.style}>
    //   {props.text && props.text}
    // </StyledButton>
    <StyledButton onClick={clickHandler} className="button" type="button" $color={color} style={style} text={text}>
    {/* {text} */}
  </StyledButton>
  );
}

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


type HeaderProps = {
  gameStatus: 'idle' | 'started' | 'paused' | 'resumed' | 'ended';
  setGameStatus: React.Dispatch<React.SetStateAction<string>>;
  // handleStartEndGame: () => void;
  handlePauseGame: () => void;
};

export default function Header({ gameStatus, handlePauseGame,
  //  handleStartEndGame,
   setGameStatus}: HeaderProps) {

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

    const side = 'left';

    const getHeaderButtonText = (side) => {
      let text;
      if (side === 'left') {
        text = gameStatus === 'ended' || gameStatus === 'idle' ? 'Start Game' : 'End Game';
      } else if (side === 'right') {
        text = gameStatus === 'paused' ? 'Resume Game' : gameStatus === 'started' || gameStatus === 'resumed' ? 'Pause Game' : '';
      }
      return text;
    };

    // const LeftButtonText = gameStatus === 'ended' || gameStatus === 'idle' ? 'Start Game' : 'End Game';

    const RightButtonText = gameStatus === 'paused' ? 'Resume Game' : gameStatus === 'started' || gameStatus === 'resumed' ? 'Pause Game' : '';

    // const LeftButtonStyle = {
    //   display: gameStatus === 'ended' ? 'none' : 'flex'
    // };

    const LeftButtonDisplay = gameStatus === 'ended' ? 'none' : 'flex';

    const LeftButtonStyle = {
      display: LeftButtonDisplay
    };

    // const RightButtonStyle = {
    //   display: gameStatus ===  'idle' || gameStatus === 'ended' ? 'none' : 'flex'
    // };

  // const leftButtonProps = {
  //   clickHandler: handleStartEndGame,
  //   text: LeftButtonText,
  //   style: LeftButtonStyle,
  //   color: "dark",
  // };





  return (
    <header className="App-header">
      <HeaderLeft className="header-item">
        <HeaderButton
        // $color="dark"
        color="dark"
        clickHandler={handleStartEndGame}
        style={LeftButtonStyle}
        // side="left"
        side={side}
        text={(side) => getHeaderButtonText(side)}
        // props={leftButtonProps}

        // props={{
        //   clickHandler: handleStartEndGame,
        //   text: LeftButtonText,
        //   style: LeftButtonStyle,
        //    color: "dark"
        //   }}
        >
          {/* {LeftButtonText} */}
        </HeaderButton>
      </HeaderLeft>
      <h1 className="header-item" style={{textAlign: 'center', justifyContent: 'center' }}>SET</h1>
      <HeaderRight className="header-item">
        <HeaderButton $color="light" clickHandler={handlePauseGame} style={{display: gameStatus ===  'idle' || gameStatus === 'ended' ? 'none' : 'flex'}}>{RightButtonText}</HeaderButton>
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

