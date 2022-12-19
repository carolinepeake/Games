import React, { useState } from 'react';
import { FaceupCard } from './FaceupCard';
import { FacedownCard } from './FacedownCard';
// don't think I need to memoize shuffledDeck, or persist it in state, but might want to test and see
import { shuffledDeck } from './State/createGame';
import styled from 'styled-components';
import './index.css';

export const Board = () => {

  // can make shuffling hands or something to do with shuffling while app is loading or cards are being dealt


  const [isStarted, setIsStarted] = useState(false);
  // const [buttonText, setButtonText] = useState('Start Game')
  const handleStartGame = async (e) => {
    setIsStarted(true);
    e.preventDefault();
  };

  // look at travel blog to determine how to make text change on boolean
  // let buttonText = '';
  // isStarted ? 'Pause Game' : 'Start Game'

  // could make styled card a separate component and then import it for faceup card and facedown card and extend the Card style using styled components

  return (
    <>
      <BoardContainer>
        {!isStarted
        ? [...Array(12).keys()].map((card, index) => {
          return (
            <FacedownCard key={index}/>
          )
        })
        : shuffledDeck.slice(0, 12).map((card, index) => {
          let key = card[0][0] + card[1][0] + card[2][0] + card[3];
          return(
          // <CardContainer key={key} index={index}>
            <FaceupCard shading={card[0]} shape={card[1]} color={card[2]} count={card[3]} index={index} cardID={key} key={key} />
          // </CardContainer>
          );
        })}
      </BoardContainer>
      <StartButton onClick={e => handleStartGame(e)}
      style={{display: isStarted ? 'none' : 'flex'}}
      >Start Game</StartButton>
    </>
  );
};

const BoardContainer = styled.div`
  height: 70vh;
  width: 70vw;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  left-margin: 10%;
`;


const StartButton = styled.button`
padding: 0.1em;
position: absolute;
top: 0;
left: 2%;
`

// const CardContainer = styled.div`
//   height: 100px;
//   width: 200px;
//   border: 0.1em rgba(165, 165, 160, 0.44) solid;
//   text-align: center;
//   justify-content: center;
//   border-radius: 5px;
//   box-shadow: 5px 5px 10px 1px rgba(63, 61, 61, 0.79);
// `;