import React, { useState } from 'react';
import { FaceupCard } from './FaceupCard';
import { FacedownCard } from './FacedownCard';
// don't think I need to memoize shuffledDeck, or persist it in state, but might want to test and see
// import { shuffledDeck } from './State/createGame';
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

export const Board = ({
  flip,
  gameStatus,
  deck,
  setDeck,
}) => {

  // const [deck, setDeck] = useState(shuffledDeck);

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

    const [selectedCards, setSelectedCards] = useState([]);

    const selectedCount = selectedCards.length;

   // const board = deck.slice(0, 12);

    // function getSelectedCardIndex(selectedCard) {

    // }

    if (selectedCount === 3) {
     const set = checkSelection();
     console.log('viable set? : ', set);
     if (set) {
       console.log('vaiable set! ', selectedCards);
       // show message correct set
       // add cards to player who clicked hand's
         // for now add them to single player's discard pile
       // set out 3 new cards in spots left empty by selectedCards
       deal3NewCards();
       setSelectedCards([]);
     } else {
      // show message not a set
      setSelectedCards([]);
     }
    };

    //const selectedCardsE = ['bdr2', 'sog1', 'sdp3'];

    // reduce()
    // const viableSet = selectedCardsE.reduce(
    //   (accumulator, currentValue) => {
    //     return (currentValue &&
    //   },
    //   true
    // );

    // might be easier to keep as object and filter to unique values for each property and each has to be either 1 or 3 unique values
    function checkSelection() {
      // could use reduce() above
      // let fill = [selectedCards[0][0], selectedCards[1][0], selectedCards[2][0]];
      // let shape = [selectedCards[0][1], selectedCards[1][1], selectedCards[2][1]];
      // let color = [selectedCards[0][2], selectedCards[1][2], selectedCards[2][2]];
      // let count = [selectedCards[0][3], selectedCards[1][3], selectedCards[2][3]];

      let fill = selectedCards.map(card => card.shading);
      let shape = selectedCards.map(card => card.shape);
      let color = selectedCards.map(card => card.color);
      let count = selectedCards.map(card => card.count);

      const distinctiveFill = [...new Set(fill)];
      const distinctiveShape = [...new Set(shape)];
      const distinctiveColor = [...new Set(color)];
      const distinctiveCount = [...new Set(count)];

      console.log('distinctiveFill: ', distinctiveFill, 'distinctiveShape: ', distinctiveShape, 'distinctiveColor :', distinctiveColor, 'distinctiveCount: ', distinctiveCount);

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

    // new board is not rendering
    function deal3NewCards() {
      let oldDeck = deck.slice();
      // let oldBoard = deck.slice(0, 12);
      // let nextThreeCards = deck.slice(12, 15);
      // console.log('next3Cards :', )
      // let removedCards =  selectedCards.slice();
      const emptySpots = selectedCards.map(selectedCard => selectedCard.index);
      console.log('empty spots: ', emptySpots);
      // let fill = [selectedCards[0][0], selectedCards[1][0], selectedCards[2][0]];
      // let shape = [selectedCards[0][1], selectedCards[1][1], selectedCards[2][1]];
      // let color = [selectedCards[0][2], selectedCards[1][2], selectedCards[2][2]];
      // let count = [selectedCards[0][3], selectedCards[1][3], selectedCards[2][3]];
      // let newCardIndex = 12;

      for (let i = 0; i < emptySpots.length; i++ ) {
        oldDeck.splice(emptySpots[i], 1, oldDeck[12]);
        oldDeck.splice(12, 1);
        // newCardIndex++;
      }
      console.log('new deck : ', oldDeck);
      setDeck(() => oldDeck);
      // for (let i = 0; i <= 11; i++) {
      //   for (let j = 0; j <= 2; j++) {
      //     let oldCard = '' + oldBoard[i][0][0] + oldBoard[i][1][0] + oldBoard[i][2][0] + oldBoard[i][3][0];
      //     if (oldCard === removedCards[j]) {
      //       let nextCard = nextThreeCards.shift();
      //       oldBoard.splice(i, 1, nextCard);
      //       removedCards.splice(j, 1);
      //     }
      //   }
      // }
      // console.log('oldBoard :', oldBoard, 'board: ', board, 'nextThreeCards: ', nextThreeCards, 'removedCards :', removedCards, 'selectedCards :', selectedCards, 'deck: ', deck);
      // let remainingCards = deck.slice(15);
      // let newBoard = oldBoard.concat(remainingCards);
      // console.log('new board: ', newBoard);
      // setDeck(newBoard);
    }

    function handleSelect(e, card = {}, index) {
      e.preventDefault();
      console.log('e :', e);
      // const cardIndex = e.currentTarget.index;
      // const card = e.currentTargert.card;
      card.index = index;
      if (selectedCards.length === 0) {
        // start timer
      }
      // if (selectedCards.includes(card)) {
      //   // should eithet toggle deselect or show message already selected
      //   return;
      // }
      // // would be better practice to do based off of unique id not index, but can fix later
      if (selectedCards.map(selectedCard => selectedCard.id).includes(card.id)) {
        return;
      }
      setSelectedCards([
        ...selectedCards,
        card,
      ]);

    };


  return (
      <StyledBoard>
        {deck.slice(0, 12).map((card, index) => {
          console.log()
          return(
            <StyledFlip className="card" key={card.id} flip={flip} gameStatus={gameStatus}>
              <FacedownCard />
              <FaceupCard
                id={card.id}
                index={index}
                card={card}
                isSelected={
                  selectedCards.map(selectedCard => selectedCard.id).includes(card.id)
                }
                onSelect={handleSelect}
              />
            </StyledFlip>
          );
        })}
      </StyledBoard>
  );
};

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

// can just interpolate
// const animation = props =>
//   props.flip === 'flip' ?
//     css`
//       ${cardFlip} .275s forwards linear;
//     `
//   : props.flip === 'unflip' ?
//     css`
//         ${cardUnflip} .275s forwards linear;
//       `
//   : css`
//         none;
//       `
//   ;

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
`

// animation: ${props => props.flip === 'flip' ? `${cardFlip} .275s forwards linear` : props.flip === 'unflip' ? `${cardUnflip} .275s forwards linear` : ''};