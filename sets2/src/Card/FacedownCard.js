import React from 'react';
import styled from 'styled-components';
import './Card.css';

export const FacedownCard = ({ gameStatus }) => {

  // let className = "card-face card-back";
  let className = "card-back";
  if (gameStatus === 'idle') {
    // className = "card-face card-back dimmed";
    className = "card-back dimmed";
  }

  return (
      // <CardBack
      //   className={className}
      // >
      //   <Lines className="cardback-lines" />
      //   {/* <Text className="block-font">SET</Text> */}
      //   <h2 className="cardback-text">SET</h2>
      // </CardBack>
      <div
      className={className}
    >
      <div className="cardback-lines" />
      <h2 className="cardback-text">SET</h2>
    </div>
  )
};

const CardBack = styled.div`
z-index: 3;
flex-direction: column;
align-items: center;
background: radial-gradient(ellipse 100% 100% at top left, rgba(198,146,214,0.9) 0%, rgba(195,0,171,0.9) 55%, rgba(80,9,193,0.9) 100%);
border-radius: 5px;
transform: rotateY(180deg);
`;

const Lines = styled.div`
  width: 100%;
  height: 20%;
  background-size: 1px 4%;
  box-shadow: 0 0 1em rgba(var(--teal), 0.4);
  left: 0;
  transform: translateY(-0.5em);
  position: absolute;
  z-index: 4;
  background: linear-gradient(rgba(82, 79, 215,0.2) 20%, rgba(82, 79, 215,1) 40%, rgba(82, 79, 215,1) 60%, rgba(82, 79, 215,0.2) 80%);
`;

const Text = styled.h2`
  color: white;
  right: 20%;
  font-size: 1.75em;
  -webkit-text-stroke: 1px blue;
  text-length: 45%;
  stroke-linecap: round;
  stroke-linejoin: round;
  position: absolute;
  z-index: 5;
  font-weight: 900;
  transform: translateY(-50%);
  line-height: 0.75em;
  text-shadow: 3px 1px 1px #4af7ff, 2px 2px 1px #165bfb, 4px 2px 1px #4af7ff,
    3px 3px 1px #165bfb, 5px 3px 1px #4af7ff, 4px 4px 1px #165bfb,
    6px 4px 1px #4af7ff, 5px 5px 1px #165bfb, 7px 5px 1px #4af7ff,
    6px 6px 1px #165bfb, 8px 6px 1px #4af7ff, 7px 7px 1px #165bfb,
    9px 7px 1px #4af7ff;
`;
