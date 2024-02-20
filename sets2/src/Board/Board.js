import React, { useState, useEffect, useRef, useReducer } from "react";
import styled, { keyframes, css } from 'styled-components';
import { unshuffledDeck, shuffleDeck } from '../State/createGame';
import '../index.css';
import '../App.css';
import './Board.css';
import { Modal } from '../Modal.tsx';
import { Button } from '../StyledComponents.js';
import Scoreboard from '../Scoreboard.js';
import Card from '../Card/Card.js';
import { Timer } from '../Timer';
import { checkSet, getSet, replaceCards, gameReducer, getInitialState } from '../State/gameReducer';
import { DIFFICULTY_VALUES } from '../State/gameConstants';
// TODO: subtract 1 point if incorrect set
// TO-DO: make shuffling hands or something to do with shuffling while app is loading or cards are being dealt

type BoardProps = {
  state: {
    status: 'idle' | 'starting' | 'paused' | 'inPlay' | 'ended';
    difficulty: '1' | '2' | '3';
  };
  // dispatch;
  // handleSelectCard
  // handleClickAddCards
  // handleClickSet
  // handleClickPause,
  // handleStartGame
};

export const Board = ({
  state: {
    status,
    deck,
    cardsShowing,
    selectedCards,
    isSet,
    activePlayer,
    players,
    difficulty
  },
  dispatch,
  handleSelectCard,
  handleClickAddCards,
  handleClickSet,
  handleClickPause,
  handleStartGame,
}: BoardProps) => {

  const [modalText, setModalText] = useState('');

  // let text;

  // text =
  //   isSet ? 'You found a set!' :
  //   isSet === false ? 'Not a set' :
  //   // isSet === null ? '' :
  //   status === 'idle' ? 'Start Game' :
  //   status === 'ended' ? 'Play Again' :
  //   '';

    // setModalText(text);

  // could make modalText child and then will only render if value
  const modal =
  modalText.length > 0 ?
    <Modal
      text={modalText}
      setText={() => 'text'}
    />
   : null;


  // useEffect(() => {

  //   function runBot() {
  //     let selection;
  //     let startIndex = 0; // let startIndex = Math.floor(Math.random() * 12);
  //     let secondCard = startIndex + 1;
  //     let thirdCard = startIndex + 2;
  //     let cardsShowing;
  //     if (deck.length > board) {
  //       cardsShowing = board;
  //     } else {
  //       cardsShowing = deck.length;
  //     }
  //     while (startIndex <= cardsShowing - 3) {
  //       while (secondCard <= cardsShowing - 2) {
  //         while (thirdCard <= cardsShowing - 1) {
  //           let card1 = deck[startIndex];
  //           card1.index = startIndex;
  //           let card2 = deck[secondCard];
  //           card2.index = secondCard;
  //           let card3 = deck[thirdCard];
  //           card3.index = thirdCard;
  //           selection = [card1, card2, card3];
  //           let isSet = checkSet(selection);
  //           if (isSet) {
  //             setActivePlayer('p2');
  //             setSelectedCards(selection);
  //             setP2Score(prev => prev + 1);
  //             const modalText = 'Bot found a set!';
  //             setModalText(modalText);
  //             return;
  //             // return selection;
  //           }
  //           thirdCard++;
  //         }
  //         secondCard++;
  //         thirdCard = secondCard + 1;
  //       }
  //       startIndex ++;
  //       secondCard = startIndex + 1;
  //       thirdCard = secondCard + 1;
  //     }
  //     return;
  //   };

  //   let timeout;
  //   if (activePlayer === 'p2') {
  //     timeout = setTimeout(() => {
  //       let cardsShowing;
  //       if (deck.length > board) {
  //         cardsShowing = 12;
  //       } else {
  //         cardsShowing = deck.length;
  //       }
  //       // DRAW NEXT 3 CARDS
  //       const emptySpots = selectedCards.map(selectedCard => selectedCard.index);
  //       setDeck(prevDeck => {
  //         let newDeck = prevDeck.slice();
  //         for (let i = 0; i < emptySpots.length; i++ ) {
  //           // newDeck.splice(emptySpots[i], 1, newDeck[12]);
  //           // newDeck.splice(12, 1);
  //           newDeck.splice(emptySpots[i], 1, newDeck[cardsShowing]);
  //           newDeck.splice(cardsShowing, 1);
  //         }
  //         return newDeck;
  //       });
  //       setSelectedCards([]);
  //       setModalText('');
  //       setActivePlayer('');
  //       setBoard(12);
  //     }, 1500);
   // TODO: if board is 15 cards, rearrange board to shift all cards to fill holes
        // created by successful set instead of placing new cards in holes
  // } else if ((gameStatus === 'started' || gameStatus === 'resumed') && activePlayer !== 'p1') {
    //   let botTimer = 2000; // Easy
    //   if (difficulty === 'Hard') {
    //     botTimer = 5000;
    //   } else if (difficulty === 'Medium') {
    //     botTimer = 10000;
    //   }
    //   timeout = setTimeout(() => runBot(), botTimer);
  //   }
  //   return () => clearTimeout(timeout);

  // }, [gameStatus, deck, activePlayer, difficulty, board]);



  return (
    <>
      {(status !== 'ended' && status !== 'idle') && (
        <div className="flexbox top-controls">
          <div>
            {`Cards Remaining: ${deck.length}`}
          </div>
            <Timer
              status={status}
              handleClickPause={handleClickPause}
            />
        </div>
      )}

    {(deck.length > 0 && status !== 'ended') && (
      <StyledBoard>
        {deck.slice(0, cardsShowing).map((card, index) => (
          <Card
            key={card.id || undefined}
            status={status}
            index={index}
            card={card}
            handleSelectCard={handleSelectCard}
            selected={selectedCards.map(selectedCard => selectedCard.id).includes(card.id)}
          />
        ))}
        {modal}
        {status === 'idle' && (
          <Modal
            tag="button"
            text="Start Game"
            clickModalHandler={handleStartGame}
            // clickModalHandler={() => dispatch({type: 'START'})}
          />
        )}
      </StyledBoard>
    )}

    {status !== 'idle' && (
      <Scoreboard
        players={players}
        $disabled={activePlayer}
        handleClickSet={handleClickSet}
        handleAddCards={handleClickAddCards}
        deck={deck}
        cardsShowing={cardsShowing}
        status={status}
        dispatch={dispatch}
        setModalText={setModalText}
        activePlayer={activePlayer}
      />
    )}
  </>
  );
};

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

// TO-DO: make cardAppear animation like shuffling (each card slides and then snaps into place 1 by 1)
const StyledBoard = styled.div`
 /* height: 80vh; */
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  perspective: 600px;
  animation: ${cardAppear} 1.4s forwards;
  background-color: #66 4af7ff;
`;




