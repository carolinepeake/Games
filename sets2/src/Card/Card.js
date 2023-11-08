import React from 'react';
import styled, { keyframes, css} from 'styled-components';
import { FaceupCard } from './FaceupCard';
import { FacedownCard } from './FacedownCard';

export default function Card({gameStatus, card, index, selected, handleSelectCard}) {

  return (
    <StyledFlip className="card"
    gameStatus={gameStatus}>
      <FacedownCard />
      <FaceupCard
        // id={card.id}
        index={index}
        card={card}
        selected={selected}
        onSelect={handleSelectCard}
      />
    </StyledFlip>
  );
}

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

const animation = props =>
  props.gameStatus === 'started' || props.gameStatus === 'resumed' ?
    css`
      ${cardFlip} .275s forwards linear;
    `
  : props.gameStatus === 'paused' ?
    css`
      ${cardUnflip} .275s forwards linear;
    `
  : css`
      none;
    `
;

const StyledFlip = styled.div`
  animation: ${animation};
`;