import React from 'react';
import styled from 'styled-components';
import AddCardsBtn from './AddCardsBtn.js';
import SetBtn from './SetBtn.js';
import { capitalizeFirstLetter } from './utils/capitalize'
import './index.css';

type EntryProps = {
  //   name:
  // score:
};

export const Entry = ({ player }: EntryProps) => {

  const name = capitalizeFirstLetter(player?.name);
  const score = player?.setCnt;

  return (
    <Item>
      <Player>
        {`${name}: `}
      </Player>
      <Score>
        {`${score} sets`}
      </Score>
    </Item>
  );
}


type ScoreboardProps = {
  // players: [{
  //   name:
  // }]
};

export default function Scoreboard({
  players,
  $disabled,
  handleClickSet,
  timeRemaining,
  setModalText,
  deck,
  handleAddCards,
  cardsShowing,
  status,
  dispatch,
}: ScoreboardProps) {

  return (
    <Container >

      <Entry player={players['01']}/>

      {status !== 'ended' && (
        <BtnContainer>
          <SetBtn
            $disabled={$disabled}
            handleClickSet={handleClickSet}
            timeRemaining={timeRemaining}
            setModalText={setModalText}
            dispatch={dispatch}
          />
          <AddCardsBtn
            deck={deck}
            handleAddCards={handleAddCards}
            cardsShowing={cardsShowing}
            $disabled={$disabled}
          />
        </BtnContainer>
      )}

      <Entry player={players['02']}/>

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

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 8rem;
  align-self: center;
  margin-top: 1rem;
`;




