import Card from './Card';
//import cards from './testData/cards';
import shuffledDeck from './State/createGame';
import styled from 'styled-components';

export const Board = () => {

  return (
    <BoardContainer>
      {shuffledDeck.slice(0, 9).map((card, index) => {
        let key = card[0][0] + card[1][0] + card[2][0] + card[3][0];
        return(
        <CardContainer key={key} index={index}>
          <Card shading={card[0]} shape={card[1]} color={card[2]} count={card[3]} />
        </CardContainer>
        );
      })}
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gaps: 2em;
`;

const CardContainer = styled.div`
  height: 40px;
  width: 100px;
  border: thin black solid;
  text-align: center;
  justify-content: center;
`;
// shadow