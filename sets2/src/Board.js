import React from 'react';
import { Card } from './Card';
//import cards from './testData/cards';
import { shuffledDeck } from './State/createGame';
import styled from 'styled-components';

export const Board = () => {

  return (
    <BoardContainer>
      {shuffledDeck.slice(0, 9).map((card, index) => {
        let key = card[0][0] + card[1][0] + card[2][0] + card[3];
        let patternId = card[0][0] + card[2][0];
        return(
        <CardContainer key={key} index={index}>
          <Card shading={card[0]} shape={card[1]} color={card[2]} count={card[3]} patternId={patternId} index={index}/>
        </CardContainer>
        );
      })}
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  height: 70vh;
  width: 70vw;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
`;

const CardContainer = styled.div`
  height: 100px;
  width: 200px;
  border: 0.1em rgba(165, 165, 160, 0.44) solid;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 1px rgba(63, 61, 61, 0.79);

`;
// shadow