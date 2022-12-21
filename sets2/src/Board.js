import React, { useState, useEffect } from 'react';
import { FaceupCard } from './FaceupCard';
import { FacedownCard } from './FacedownCard';
// don't think I need to memoize shuffledDeck, or persist it in state, but might want to test and see
import { shuffledDeck } from './State/createGame';
import styled, { keyframes, css } from 'styled-components';
import './index.css';

const cardAppear = keyframes`
  0% {
    transform: rotate3d(0,0,1,15deg) translate3d(0,-100vh,0);
  }
  30% {
    transform: rotate3d(0,0,0,0deg) translate3d(0,0,0);
  }
  65% {
    transform: rotate3d(0,0,0,0deg) translate3d(0,0,0) scale3d(1,1,1);
  }
  80% {
    transform: rotate3d(0,0,1,-5deg) scale3d(1.05,1.05,1);
  }
`;

const cardFlip = keyframes`
  0% {
    transform: rotateZ(0deg) rotateY(180deg);
  }
  50% {
    transform: rotateZ(-10deg) rotateY(90deg);
  }
  100% {
    transform: rotateZ(0deg) rotateY(0deg);
  }
`;

const cardUnflip = keyframes`
  0% {
    transform: rotateZ(0deg) rotateY(0deg);
  }
  50% {
    transform: rotateZ(-10deg) rotateY(90deg);
  }
  100% {
    transform: rotateZ(0deg) rotateY(180deg);
  }
`;

// const CardAppear = styled.div`

// `;

export const Board = ({ isStarted, flip }) => {

  // can make shuffling hands or something to do with shuffling while app is loading or cards are being dealt

  // could make styled card a separate component and then import it for faceup card and facedown card and extend the Card style using styled components


  // const [unflip, setUnflip] = useState('');
  // useEffect(() => {

  // }, [isStarted])
  // card.addEventListener('click', function(e){
  //   e.stopPropagation();
  //   if(card.classList.contains('card--flipped')) {
  //     card.classList.add('card--unflip');
  //     setTimeout(function(){
  //       card.classList.remove('card--flipped', 'card--unflip');
  //     }, 500);
  //   }
  //   else {
  //     card.classList.add("card--flipped");
  //   }
  // });

  return (
      <StyledBoard>
        {/* {!isStarted
        ?  */}
        {/* [...Array(12).keys()].map((card, index) => {
          return (
            <FacedownCard key={index} flip={flip}/>
          )
        })
        :  */}
        {shuffledDeck.slice(0, 12).map((card, index) => {
          let key = card[0][0] + card[1][0] + card[2][0] + card[3];
          return(
            <StyledFlip className="card" key={key} flip={flip}>
              <FacedownCard index={index} cardID={key} />
              <FaceupCard shading={card[0]} shape={card[1]} color={card[2]} count={card[3]} index={index} cardID={key}/>
            </StyledFlip>
          );
        })};
        {/* } */}
      </StyledBoard>
  );
};

// make cardAppear animation like shuffling (each card slides and then snaps into place 1 by 1)
const StyledBoard = styled.div`
  height: 70vh;
  width: 70vw;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  left-margin: 10%;
  perspective: 600px;
  animation: ${cardAppear} 1.4s forwards;
`;
// can just interpolate
const animation = props =>
  props.flip === 'flip' ?
    css`
      ${cardFlip} .275s forwards linear;
    `
  : props.flip === 'unflip' ?
    css`
        ${cardUnflip} .275s forwards linear;
      `
  : css`
        none;
      `
  ;

const StyledFlip = styled.div`
  animation: ${animation};

`

// animation: ${props => props.flip === 'flip' ? `${cardFlip} .275s forwards linear` : props.flip === 'unflip' ? `${cardUnflip} .275s forwards linear` : ''};