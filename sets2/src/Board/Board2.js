import React, { useState, useEffect, useRef, useReducer } from "react";
import styled, { keyframes, css } from 'styled-components';
import { unshuffledDeck, shuffleDeck } from '../State/createGame';
import '../index.css';
import { Modal } from '../Modal.tsx';
import { Button } from '../StyledComponents.js';
import Scoreboard from '../Scoreboard.js';
import Card from '../Card/Card.js';
import TopControls from '../TopControls';
import { checkSet } from '../utils/gamePlay';
import { gameReducer, getInitialState } from '../State/gameReducer';

// TODO: subtract 1 point if incorrect set
// TO-DO: make shuffling hands or something to do with shuffling while app is loading or cards are being dealt

export const Board2 = () => {

  const [state, dispatch] = useReducer(gameReducer, getInitialState());

  // const [timeRemaining, setTimeRemaining] = useState(10);
  const intervalId = useRef(null);

  const handleClickSet = () => {
    dispatch({type: 'CLICK_SET', payload: 0}) // payload is player who clicked

    // start 10 sec countdown
    const id = setInterval(() => {
      dispatch({type: 'COUNTDOWN'});
      // setTimeRemaining(prevSecs => prevSecs - 1);
    }, 1000);
    intervalId.current = id;

  };

  const handleSelectCard = (card, index) => {
    card.index = index;
    dispatch({type: 'SELECT_CARD', payload: { card: card, player: 0 }}); // include clicking player in payload
  };

  const handleAddCards = () => {
    dispatch({type: 'ADD_CARDS'});
  };

  useEffect(() => {
    let timeout;
    let id = intervalId.current;

    if (state.timeRemaining === 0) {
      clearInterval(id);

      timeout = setTimeout(() => {
        // setTimeRemaining(10);
        dispatch('TIMEOUT');
      }, 1000);
    }

    return () => clearTimeout(timeout);

  }, [state.timeRemaining]);


  // TODO: refactor updating state and showing modal after set determination
  useEffect(() => {

    const timeout = setTimeout(() => {
      if (state.set === true) {
        // setTimeRemaining(10);
        dispatch({type: 'CONTINUE'});
      }
      if (state.set === false) {
        dispatch({type: 'CLEAR'});
      }
    }, 1500);

    return () => clearTimeout(timeout);

  }, [state.set]);

  let modalText = state.set ? 'You found a set!' : state.set === false ? 'Not a set' : state.timeRemaining === 0 ? 'No set selected' : '';

  // could make modalText child and then will only render if value
  const modal =
  modalText.length > 0 ?
    <Modal
      text={modalText}
      setText={() => 'text'}
    />
   : null;


  // useEffect(() => {
  //   if (deck.length === 0 && gameStatus === 'started') {
  //     setGameStatus('ended');
  //   }

  //   function runBot() {

  //     function checkSelection(selectedCards) {
  //       let fill = selectedCards.map(card => card.shading);
  //       let shape = selectedCards.map(card => card.shape);
  //       let color = selectedCards.map(card => card.color);
  //       let count = selectedCards.map(card => card.count);

  //       const distinctiveFill = [...new Set(fill)];
  //       const distinctiveShape = [...new Set(shape)];
  //       const distinctiveColor = [...new Set(color)];
  //       const distinctiveCount = [...new Set(count)];

  //       if (distinctiveFill.length === 2) {
  //         return false;
  //       }
  //       if (distinctiveShape.length === 2) {
  //         return false;
  //       }
  //       if (distinctiveColor.length === 2) {
  //         return false;
  //       }
  //       if (distinctiveCount.length === 2) {
  //         return false;
  //       }

  //       return true;
  //     };

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
  //           let isSet = checkSelection(selection);
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
  //   }
  //   return () => clearTimeout(timeout);

  // }, [gameStatus, deck, activePlayer, difficulty, board]);

  // function checkWinner() {
  //   if (deck.length === 0) {
  //     setGameStatus('ended');
  //     // setShowFinalScore(true);
  //   }
  // }

  // useEffect(() => {
  //   if (gameStatus === 'started' && deck.length === 0) {
  //     if (p1Score > p2Score) {
  //       setModalText('You Win!');
  //     } else if (p1Score < p2Score) {
  //       setModalText('Bot Wins!');
  //     } else {
  //       setModalText('Tie!');
  //     }
  //   }
  // }, [p1Score, p2Score, gameStatus]);


  // if (state.status === 'ended') {
  //   const scoreboard = state.score[0] > state.score[1] ? 'You win!' : state.score[0] < state.score[1] ? 'Bot wins!' : 'Tie!';
  //   setModalText(scoreboard);
  // }



  return (
    <>
    {(state.status !== 'ended' && state.status !== 'idle') && (
    <TopControls
      deck={state.deck}
      gameStatus={state.status}
      // setGameStatus={dispatch}
    />)}

    {(state.deck.length > 0 && state.status !== 'ended')
    && (
    <StyledBoard>
    {state.deck.slice(0, state.cardsShowing).map((card, index) => (
          <Card
            key={card.id || undefined}
            gameStatus={state.status}
            index={index}
            card={card}
            handleSelectCard={handleSelectCard}
            selected={
              state.selectedCards.map(selectedCard => selectedCard.id).includes(card.id)
            }
          />
      ))}

      {modal}

      {state.status === 'idle' && (
        <Modal
          tag="button"
          text="Start Game"
          clickModalHandler={() => dispatch({type: 'START'})}
        />
      )}

    </StyledBoard>
    )}

      {state.status !== 'idle' && (
      <Scoreboard
        score={state.score}
        disabled={!state.turn}
        handleClickSet={handleClickSet}
        handleAddCards={handleAddCards}
        deck={state.deck}
        board={state.cardsShowing}
        timeRemaining={state.timeRemaining}
        gameStatus={state.status}
      />)}

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




