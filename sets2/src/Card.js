import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Diamond } from './assets/Diamond';
import { Blob } from './assets/Blob';
import { Oval } from './assets/Oval';


export const Card = ({shading, shape, color, count}) => {

  // props could be the three options
  // keep track of how many cards are selected
  // const [numCardsSelected, setNumCardsSelected] = useState(0);
  // useEffect(() => {

  //   if (numCardsSelected === (2 || 3)) {
  //     handleCheckSelection();
  //   }
  // }, [numCardsSelected]);

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

  const handleSelectCard = async () => {
    // make card bigger and maybe shadow darker or something to show selection
    // start timer
    // increase selected cards count
      // either by using state or just a variable
    numCardsSelected ++;
    // if (numCardsSelected === 3) {
    //   handleCheckSelection();
    // }

  };

  //let shape =

  return (
    <StyledCard onClick={e=> handleSelectCard(e)}>
      {[...Array(count).keys()].map((unit, index) => {
        return (
          <SymbolContainer>
            {shape === 'diamond' && <Diamond color={color} shading={shading} i={index}/>}
            {shape === 'squiggle' && <Blob color={color} shading={shading} i={index}/>}
            {shape === 'oval' && <Oval color={color} shading={shading} i={index}/>}
          </SymbolContainer>
        )
      })}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  display: flex;

`;
//background-color: ${props => props.fillColor || "palevioletred"};
// ${props => props. && css`
// background: white;
// color: black;
// `}

const SymbolContainer = styled.div`
`;

//shadow behind the card

// const Diamond = styled.div`
//   background-color: ${props => props.color || "palevioletred"};
//   width: 25%;
//   aspect-ratio: 1;
//   rotate: 45deg;
//   ${props => props.i === 2 && css`
//    translate: 25 25;
//   `}
// `;



