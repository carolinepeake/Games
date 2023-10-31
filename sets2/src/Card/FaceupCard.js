import React from 'react';
import styled from 'styled-components';
import { Symbol } from './Symbol';
import './Card.css';

type FaceupCardProps = {
  index: number;
  card: {
    id: string;
    shading: string;
    shape: string;
    color: string;
    index?: number;
  };
  id: string;
  selected: boolean;
  // prolly not correct
  onSelect: (card: any, index: number) => void;
};

export const FaceupCard = ({
  index,
  card,
  id,
  selected,
  onSelect
}: FaceupCardProps) => {

  //the symbols are not properly responsive: they get uber tiny when screensize decreases

  return (
    <CardFront
      className={`card-face ${selected ? 'selected' : ''}`}
      onClick={() => onSelect(card, index)}
    >
      {[...Array(card.count).keys()].map((symbol, num) => {
        let key = id + 'S' + num;
        return (
          <SymbolContainer key={key}>
            <Symbol color={card.color} shading={card.shading} shape={card.shape} />
          </SymbolContainer>
        );
      })}
    </CardFront>
  );
};

// for styled-card, should put an upper range on padding

// :active (element is clicked on) should work as a selector, it does for a split second but then the styles don't stay
// if can get active to work, can refactor cursor and transform properties to both be under &:hover, &:active {}
const CardFront = styled.div`
  padding: calc(10px + 0.05vh) 0;
  border-radius: inherit;
  &:hover {
    cursor: pointer;
    transform: scale(1.025);
  }
  &.selected {
    cursor: pointer;
    transform: scale(1.025);
    box-shadow: 5px 5px 10px 1px rgba(63, 61, 61, 0.9);
    border: 0.1em rgba(55, 55, 51, 0.8) solid;
  }
`;
// transform: rotateY(180deg);

// height: 100px;
// width: 200px;
//padding: 1em 0;




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








