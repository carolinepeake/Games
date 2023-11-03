import React from 'react';
import styled from 'styled-components';
import { Button } from './StyledComponents';
import { Timer } from './Timer';

type ScoreboardProps = {
  gameStatus: 'idle' | 'started' | 'paused' | 'resumed' | 'ended';
  setGameStatus: React.Dispatch<React.SetStateAction<string>>;
  // p1Score:
  // p2Score:
};

export default function Scoreboard({ gameStatus, setGameStatus, p1Score, p2Score}: ScoreboardProps) {

  const handlePauseGame = () => {
    gameStatus === 'paused' ? setGameStatus('resumed') : setGameStatus('paused');
  };

  const RightButtonText = gameStatus === 'paused' ? 'Resume' : gameStatus === 'started' || gameStatus === 'resumed' ? 'Pause' : '';

  const handleClickSet = () => {
    // start 10 sec countdown
    // allow cards to be clicked on

  };

  return (
    <Container style={{display: gameStatus ===  'idle' || gameStatus === 'ended' ? 'none' : 'flex'}}>
    <SBContainer>

      <Item>
        <Player>
          You:
        </Player>
        <Score>
          {`${p1Score} sets`}
        </Score>
      </Item>

      <SetButton onClick={handleClickSet}>
        SET
      </SetButton>

      <Item>
        <Player>
          Bot:
        </Player>
        <Score>
        {`${p2Score} sets`}
        </Score>
      </Item>

    </SBContainer>
    <PauseContainer>
      <PauseButton $color="light" onClick={handlePauseGame} style={{display: gameStatus ===  'idle' || gameStatus === 'ended' ? 'none' : 'flex'}}>{RightButtonText}</PauseButton>
      <Timer
        gameStatus={gameStatus}
      />
    </PauseContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  margin: 0 auto;
 /* margin-top: 5vh; */
  height: 100%;
`;

const SBContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  gap: 1rem;
  width: 100%;
`;

const Item = styled.div``;

const Player = styled.span`
`;

const Score = styled.span``;

const SetButton = styled(Button)`
  background-color: #165bfb;
  background-color: var(--darkBtnColor);
  font-size: 2rem;
  color: white;
`;

const PauseContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-left: 1px lightgrey solid;
  gap: 1rem;
  padding: 0.5rem 1rem;
`;

const PauseButton = styled(Button)`
  color: #165bfb;
  border: 1px #165bfb solid;
`;



