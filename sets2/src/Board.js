import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from 'styled-components';
import { unshuffledDeck, shuffleDeck } from './State/createGame';
import './index.css';
import { FaceupCard } from './Card/FaceupCard';
import { FacedownCard } from './Card/FacedownCard';
import { Modal} from './Modal.tsx';
import NavPanel from './NavPanel.js';
import Scoreboard from './Scoreboard.js';

type BoardProps = {
  gameStatus: 'idle' | 'started' | 'paused' | 'resumed' | 'ended';
  setGameStatus: React.Dispatch<React.SetStateAction<string>>;
};

export const Board = ({ gameStatus, setGameStatus }: BoardProps) => {

  const [deck, setDeck] = useState([]);

  useEffect(() => {
    gameStatus === 'idle' && setDeck(shuffleDeck(unshuffledDeck));
  }, [gameStatus])

  // TO-DO: make shuffling hands or something to do with shuffling while app is loading or cards are being dealt

  const [selectedCards, setSelectedCards] = useState([]);

  const [modalText, setModalText] = useState('');

  const [p1Score, setP1Score] = useState(0);

  const [p2Score, setP2Score] = useState(0);

  const [disabled, setDisabled] = useState(false);

  const handleClickSet = () => {
    // start 10 sec countdown
    // allow cards to be clicked on
    setDisabled(true);
  };

  const handleSelectCard = (card, index) => {
    if (disabled === false) {
      return;
    }
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
      if (set) {
        setP1Score(prev => prev + 1);
      }
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

  useEffect(() => {
    function runBot() {

      function checkSelection(selectedCards) {
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

      let selection;

      let startIndex = 0; // let startIndex = Math.floor(Math.random() * 12);
      let secondCard = startIndex + 1;
      let thirdCard = startIndex + 2;

      while (startIndex <= 9) {
        while (secondCard <= 10) {
          while (thirdCard <= 11) {
            let card1 = deck[startIndex];
            card1.index = startIndex;
            let card2 = deck[secondCard];
            card2.index = secondCard;
            let card3 = deck[thirdCard];
            card3.index = thirdCard;
            selection = [card1, card2, card3];
            let isSet = checkSelection(selection);
            if (isSet) {
              setDisabled(true);
              setSelectedCards(selection);
              return;
              // return selection;
            }
            thirdCard++;
          }
          secondCard++;
          thirdCard = secondCard + 1;
        }
        startIndex ++;
        secondCard = startIndex + 1;
        thirdCard = secondCard + 1;
      }

      return;
      // return false;
    };

    let timeout;

    if (gameStatus === 'started') {
      timeout = setTimeout(() => runBot(), 3000);
    }
    return () => clearTimeout(timeout);

  }, [gameStatus, deck]);

  const modal =
  modalText.length > 0 ?
   <Modal text={modalText} setText={setModalText}/>
   : null;

  return (
    <>
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
    <Scoreboard gameStatus={gameStatus} setGameStatus={setGameStatus} p1Score={p1Score} p2Score={p2Score} disabled={disabled}/>
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

const StyledFlip = styled.div`
  animation: ${animation};
`;