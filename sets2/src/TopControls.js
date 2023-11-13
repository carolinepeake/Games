import React from "react";
import styled from 'styled-components';
import './index.css';
import { Timer } from './Timer';
import PauseBtn from './PauseBtn';

 type TopControlsProps = {
  // deck:
  gameStatus: 'idle' | 'started' | 'paused' | 'resumed' | 'ended';
  setGameStatus: React.Dispatch<React.SetStateAction<string>>;
};

export default function TopControls({
  deck,
  gameStatus,
  setGameStatus,

}: TopControlsProps) {

  return (
    <StyledTopControls>
      <CardsRemaining>
        {`Cards Remaining: ${deck.length}`}
      </CardsRemaining>

      <PauseContainer>
        <Timer
          gameStatus={gameStatus}
        />
        <PauseBtn
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
        />
      </PauseContainer>
    </StyledTopControls>
    )
  };

  const StyledTopControls = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 80vw;
  margin-bottom: 2.5vh;
  justify-content: space-between;
`;

const CardsRemaining = styled.div`
  color: grey;
`;

const PauseContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
`;