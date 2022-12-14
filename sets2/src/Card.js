import React, {useState} from 'react';
import styled from 'styled-components';
import { Symbol } from './Symbol';

export const Card = ({ shading, shape, color, count, index, cardID }) => {

  // props could be the three options
  // keep track of how many cards are selected
  // const [numCardsSelected, setNumCardsSelected] = useState(0);
  // useEffect(() => {

  //   if (numCardsSelected === (2 || 3)) {
  //     handleCheckSelection();
  //   }
  // }, [numCardsSelected]);

  // will need to move numCardsSelected & handleCheckSelection to reducer/redux or Board component
  // decide if should give error if not a set after 3 cards selected or as soon as not a set
  const handleCheckSelection = async () => {
    // reducer helper function? unique? filter?
    // for each index (characteristic) either they are all the same or all different
  //   for (let characteristicIndex = 0; characteristicIndex <= 4; characteristicIndex++) {
  //     if (card1[characteristicIndex] === card2[characteristicIndex]
  //   }
  //   if (card1[0] )
  //   card1[0] === card2[0] === card3[0] || card1[0] !== card2[0] !==
  };

  // could also make it check for mismatch as soon as second card is selected
  // would storing all values in a set and checking if the set has the values be quicker or
  // checkin the objects against each other - figure out the time complexity for each possible checking algorithm
  // might want to use reduce or unique or something
  // const handleCheckSelection = (card1, card2, card3) => {
  //   const collection = collect([card1, card2, card3]);
  //   const colors = collection.pluck('color');
  //   const shapes = collection.pluck('shape');
  //   const counts = collection.pluck('count');
  //   const fills = collection.pluck('fill');
  //   // reduce or helper function that returns false if length of colors, shapes, counts, or fills is 2
  //   // otherwise removes the three cards, and adds three new ones
  // };

  let numCardsSelected = 0;

  const [active, setActive] = useState(false);
  const handleSelectCard = async () => {
    setActive(current => !current)
    // start timer
    // increase selected cards count
      // either by using state or just a variable
      // decide if can deselect cards w/o penalty
    numCardsSelected ++;
    if (numCardsSelected === 3) {
      handleCheckSelection();
    }
  };




  // let pathData;
  // if (shape !== undefined) {
  //   pathData = getSVGPath(shape);
  // };


// must be a better way to do the active className -check links in travel blog
  return (
    <StyledCard
    className={active ? 'active' : ''}
    onClick={e => handleSelectCard(e)}
    >
      {[...Array(count).keys()].map((symbol, num) => {
        let key = cardID + num;
        return (
          <SymbolContainer key={key}>
            <Symbol color={color} shading={shading} shape={shape} key={key}/>
          </SymbolContainer>
        );
      })}
    </StyledCard>
  );
};

const StyledCard = styled.div`

  border: 0.1em rgba(165, 165, 160, 0.44) solid;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 1px rgba(63, 61, 61, 0.79);
  padding: 1em 0;
  display: flex;
  &:hover {
    cursor: pointer;
    transform: scale(1.025);
  }
  &.active {
    cursor: pointer;
    transform: scale(1.025);
    box-shadow: 5px 5px 10px 1px rgba(63, 61, 61, 0.9);
    border: 0.1em rgba(55, 55, 51, 0.8) solid;
  }
`;
// height: 100px;
  // width: 200px;
// ${(props) => {
//   props.active && css`
//     cursor: pointer;
//     transform: scale(1.025);
//     box-shadow: 5px 5px 10px 1px rgba(63, 61, 61, 0.9);
//     border: 0.1em rgba(165, 165, 160, 0.8) solid;
//   `;
// }}
 // width: 100%;
  // height: 100%;
//background-color: ${props => props.fillColor || "palevioletred"};
// ${props => props. && css`
// background: white;
// color: black;
// `}
//justify-content: center;

const SymbolContainer = styled.div`
`;








