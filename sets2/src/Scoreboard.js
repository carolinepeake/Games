import React from 'react';
import styled, { css } from 'styled-components';
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
  // setExtraCards,
  // extraCards,
  setBoard,
  board,
  gameStatus
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

      {gameStatus !== 'ended' && (
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
          // setExtraCards={setExtraCards}
          // extraCards={extraCards}
          setBoard={setBoard}
          board={board}
          disabled={disabled}
        />
      </BtnContainer>)}

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
  ${props => props.$disabled && css`
    background: linear-gradient(to right top, white ${100 - props.timeRemaining * 10}%, rgba(22,91,251,0.5) ${100 - props.timeRemaining * 10}%);
  `};
 /* ${props => props.$disabled && `background: linear-gradient(to right top, white 100 - ${props.timeRemaining} * 10%, rgba(22,91,251,0.5) 100 - ${props.timeRemaining} * 10%)`}; */
 /* background: linear-gradient(to right top, white ${props => 100 - props.timeRemaining * 10}%, rgba(22,91,251,0.5) ${props => 100 - props.timeRemaining * 10}%);
  transition: background 1sec smooth; */
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




