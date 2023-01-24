import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from 'styled-components';
import { unshuffledDeck, shuffleDeck } from './State/createGame';
import './index.css';
import { FaceupCard } from './Card/FaceupCard';
import { FacedownCard } from './Card/FacedownCard';
import { Modal} from './Modal.tsx';

type BoardProps = {
  gameStatus: 'idle' | 'started' | 'paused' | 'resumed' | 'ended';
};

export const Board = ({ gameStatus }: BoardProps) => {

  const [deck, setDeck] = useState([]);

  useEffect(() => {
    gameStatus === 'idle' && setDeck(shuffleDeck(unshuffledDeck));
  }, [gameStatus])

  // TO-DO: make shuffling hands or something to do with shuffling while app is loading or cards are being dealt

  const [selectedCards, setSelectedCards] = useState([]);

  const [modalText, setModalText] = useState('');

  const handleSelectCard = (card, index) => {
    let timeout;
    if (selectedCards.length === 0) {
      // TO-DO: start timer
    }
    if (selectedCards.map(selectedCard => selectedCard.id).includes(card.id)) {
      // could make css appear as if card was getting selected again instead
        // make smaller, enlarge and darken box shadow, then bring back to selected css
      timeout = setTimeout(() => setModalText(''), 1000);
      setModalText('Already Selected!');
    } else {
      card.index = index;
      setSelectedCards([...selectedCards, card]);
    }
    return () => clearTimeout(timeout);
    // TO-DO: if already selected, either toggle deselect or show message already selectedad
      // make give up button instead of being allowed to deselect for multiplayer
  };

  useEffect(() => {

    function checkSelection() {
      let fill = selectedCards.map(card => card.shading);
      let shape = selectedCards.map(card => card.shape);
      let color = selectedCards.map(card => card.color);
      let count = selectedCards.map(card => card.count);

      const distinctiveFill = [...new Set(fill)];
      const distinctiveShape = [...new Set(shape)];
      const distinctiveColor = [...new Set(color)];
      const distinctiveCount = [...new Set(count)];

      if (distinctiveFill.length === 2) {
        return false;
      }
      if (distinctiveShape.length === 2) {
        return false;
      }
      if (distinctiveColor.length === 2) {
        return false;
      }
      if (distinctiveCount.length === 2) {
        return false;
      }

      return true;
    };

    let timeout;

    if (selectedCards.length === 3) {
      const set = checkSelection();
      const modalText = set ? 'You found a set!' : 'Not a set!';
      setModalText(modalText);
      timeout = setTimeout(() => {
        if (set) {
          // DRAW NEXT 3 CARDS
          const emptySpots = selectedCards.map(selectedCard => selectedCard.index);
          setDeck(prevDeck => {
            let newDeck = prevDeck.slice();
            for (let i = 0; i < emptySpots.length; i++ ) {
              newDeck.splice(emptySpots[i], 1, newDeck[12]);
              newDeck.splice(12, 1);
            }
            return newDeck;
          });
          // TO-DO: add cards to player who clicked hand's
            // for now add them to single player's discard pile
        }
        setSelectedCards([]);
        setModalText('');
      }, 1500);
    }

    return () => clearTimeout(timeout);

  }, [selectedCards]);

  const modal =
  modalText.length > 0 ?
   <Modal text={modalText} setText={setModalText}/>
   : null;

  return (
    <StyledBoard>
      {deck.slice(0, 12).map((card, index) => {
        console.log()
        return(
          <StyledFlip className="card" key={card.id}
          gameStatus={gameStatus}>
            <FacedownCard />
            <FaceupCard
              id={card.id}
              index={index}
              card={card}
              selected={
                selectedCards.map(selectedCard => selectedCard.id).includes(card.id)
              }
              onSelect={handleSelectCard}
            />
          </StyledFlip>
        );
      })}

      {modal}

    </StyledBoard>
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

// TO-DO: make cardAppear animation like shuffling (each card slides and then snaps into place 1 by 1)
const StyledBoard = styled.div`
  height: 80vh;
  width: 80vw;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  left-margin: 10%;
  perspective: 600px;
  animation: ${cardAppear} 1.4s forwards;
`;

const StyledFlip = styled.div`
  animation: ${animation};
`;