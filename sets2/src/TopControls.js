import React from "react";
import styled from 'styled-components';
import './index.css';
import AddCardsBtn from './AddCardsBtn.js';
import Difficulty from './Difficulty';


 type TopControlsProps = {
  // deck:
  // setExtraCards: React.Dispatch<React.SetStateAction<array>>;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
};


export default function TopControls({
  deck,
  setExtraCards,
  difficulty,
  setDifficulty,
}: TopControlsProps) {


  return (
    <StyledTopControls>
      <CardsRemaining>
        {`Cards Remaining: ${deck.length}`}
      </CardsRemaining>
      <AddCardsBtn deck={deck} setExtraCards={setExtraCards}/>
      <Difficulty
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
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
`;

const CardsRemaining = styled.div`
  color: grey;
`;