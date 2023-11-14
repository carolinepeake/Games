import React from 'react';
import styled from 'styled-components';
import { Button } from './StyledComponents';
import AddCardsBtn from './AddCardsBtn.js';
import './index.css';

type ScoreboardProps = {
  // p1Score:
  // p2Score:
  // disabled:
  // handleClickSet:
  // timeRemaining:
  // deck:
  // setExtraCards: React.Dispatch<React.SetStateAction<array>>;
  // extraCards:
};

export default function Scoreboard({
  p1Score,
  p2Score,
  disabled,
  handleClickSet,
  timeRemaining,
  deck,
  setExtraCards,
  extraCards
}: ScoreboardProps) {



  return (
    <Container >

      <Item>
        <Player>
          You:
        </Player>
        <Score>
          {`${p1Score} sets`}
        </Score>
      </Item>

      <BtnContainer>
        <SetButton
          $disabled={disabled}
          onClick={handleClickSet}
          timeRemaining={timeRemaining}
        >
          SET
        </SetButton>

        <AddCardsBtn
          deck={deck}
          setExtraCards={setExtraCards}
          extraCards={extraCards}
        />
      </BtnContainer>

      <Item>
        <Player>
          Bot:
        </Player>
        <Score>
        {`${p2Score} sets`}
        </Score>
      </Item>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80vw;
  margin: 0 auto;
  margin-top: 0.5em;
  height: 100%;
  height: 8rem;
  font-size: 1.5rem;
  gap: 1rem;
`;

const Item = styled.div`
  text-align: center;
`;

const Player = styled.span`
  padding-right: 0.5rem;
  color: darkslategrey;
  font-weight: bold;
`;

const Score = styled.span`
  color: grey;
`;

const SetButton = styled(Button)`
  background-color: #165bfb;
  background-color: var(--darkBtnColor);
  font-size: 2rem;
  color: white;
  ${props => props.$disabled && 'background-color: rgba(22,91,251,0.5)'};
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 8rem;
  align-self: center;
  margin-top: 1rem;

`;




