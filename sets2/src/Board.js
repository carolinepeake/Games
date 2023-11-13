import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from 'styled-components';
import { unshuffledDeck, shuffleDeck } from './State/createGame';
import './index.css';
import { Modal} from './Modal.tsx';
import { Button } from './StyledComponents.js';
import Scoreboard from './Scoreboard.js';
import AddCardsBtn from './AddCardsBtn.js';
import StyledSelect from './Difficulty';
import Card from './Card/Card.js';

// TODO: subtract 1 point if incorrect set
// TO-DO: make shuffling hands or something to do with shuffling while app is loading or cards are being dealt

type BoardProps = {
  gameStatus: 'idle' | 'started' | 'paused' | 'resumed' | 'ended';
  setGameStatus: React.Dispatch<React.SetStateAction<string>>;
};

export const Board = ({ gameStatus, setGameStatus }: BoardProps) => {

  const [deck, setDeck] = useState([]);

  useEffect(() => {
    gameStatus === 'idle' && setDeck(shuffleDeck(unshuffledDeck));
  }, [gameStatus])

  const [selectedCards, setSelectedCards] = useState([]);

  const [modalText, setModalText] = useState('');

  const [p1Score, setP1Score] = useState(0);

  const [p2Score, setP2Score] = useState(0);

  const [activePlayer, setActivePlayer] = useState('');

  const [timeRemaining, setTimeRemaining] = useState(10);

  const [difficulty, setDifficulty] = useState('Easy');

  const handleClickSet = () => {
    // start 10 sec countdown
    // allow cards to be clicked on
    setActivePlayer('p1');
  };

  useEffect(() => {
    let interval;
    if (activePlayer.length === 2) {
      interval = setInterval(() => {
        setTimeRemaining(prevSecs => prevSecs - 1);
    }, 1000);
    } else {
      setTimeRemaining(10);
    }
    return () => clearInterval(interval);
  }, [activePlayer]);

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

  const handleSelectCard = (card, index) => {
    if (activePlayer !== 'p1') {
      return;
    }
    let timeout;
    if (selectedCards.map(selectedCard => selectedCard.id).includes(card.id)) {
      // could make css appear as if card was getting selected again instead
      // make smaller, enlarge and darken box shadow, then bring back to selected css
      timeout = setTimeout(() => setModalText(''), 1000);
      setModalText('Already Selected!');
    } else {
      card.index = index;
      let selection = [...selectedCards, card];
      setSelectedCards([...selectedCards, card]);
      if (selection.length === 3) {
        let set = checkSelection(selection);
        if (set) {
          setP1Score(prev => prev + 1);
          setModalText('You found a set!');
        } else {
          setModalText('Not a set!');
        }
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
            }
            setSelectedCards([]);
            setModalText('');
            setActivePlayer('');
          }, 1500);
        }
      }
      return () => clearTimeout(timeout);
    };

  // useEffect(() => {

  //   function checkSelection() {
  //     let fill = selectedCards.map(card => card.shading);
  //     let shape = selectedCards.map(card => card.shape);
  //     let color = selectedCards.map(card => card.color);
  //     let count = selectedCards.map(card => card.count);

  //     const distinctiveFill = [...new Set(fill)];
  //     const distinctiveShape = [...new Set(shape)];
  //     const distinctiveColor = [...new Set(color)];
  //     const distinctiveCount = [...new Set(count)];

  //     if (distinctiveFill.length === 2) {
  //       return false;
  //     }
  //     if (distinctiveShape.length === 2) {
  //       return false;
  //     }
  //     if (distinctiveColor.length === 2) {
  //       return false;
  //     }
  //     if (distinctiveCount.length === 2) {
  //       return false;
  //     }

  //     return true;
  //   };

  //   let timeout;

  //   if (selectedCards.length === 3) {
  //     const set = checkSelection();
  //     if (set) {
  //       if (activePlayer === 'p1') {
  //         setP1Score(prev => prev + 1);
  //       } else if (activePlayer === 'p2') {
  //         setP2Score(prev => prev + 1);
  //       }
  //     }
  //     const modalText = set ? 'You found a set!' : 'Not a set!';
  //     setModalText(modalText);
  //     timeout = setTimeout(() => {
  //       if (set) {
  //         // DRAW NEXT 3 CARDS
  //         const emptySpots = selectedCards.map(selectedCard => selectedCard.index);
  //         setDeck(prevDeck => {
  //           let newDeck = prevDeck.slice();
  //           for (let i = 0; i < emptySpots.length; i++ ) {
  //             newDeck.splice(emptySpots[i], 1, newDeck[12]);
  //             newDeck.splice(12, 1);
  //           }
  //           return newDeck;
  //         });
  //         // TO-DO: add cards to player who clicked hand's
  //           // for now add them to single player's discard pile
  //       }
  //       setSelectedCards([]);
  //       setModalText('');
  //       setActivePlayer('');
  //     }, 1500);
  //   }

  //   return () => clearTimeout(timeout);

  // }, [selectedCards, activePlayer]);

  useEffect(() => {
    if (deck.length === 0 && gameStatus === 'started') {
      setGameStatus('ended');
    }

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
              setActivePlayer('p2');
              setSelectedCards(selection);
              setP2Score(prev => prev + 1);
              const modalText = 'Bot found a set!';
              setModalText(modalText);
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
    };

    let timeout;

    if (activePlayer === 'p2') {

      timeout = setTimeout(() => {
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
        setSelectedCards([]);
        setModalText('');
        setActivePlayer('');
      }, 1500);
    } else if (gameStatus === 'started' && activePlayer !== 'p1') {
      let botTimer = 20000; // Easy
      if (difficulty === 'Hard') {
        botTimer = 5000;
      } else if (difficulty === 'Medium') {
        botTimer = 10000;
      }
      timeout = setTimeout(() => runBot(), botTimer);
    }
    return () => clearTimeout(timeout);

  }, [gameStatus, deck, activePlayer, difficulty]);

  useEffect(() => {
    if (gameStatus === 'ended') {
      if (p1Score > p2Score) {
        setModalText('You Win!');
      } else if (p1Score < p2Score) {
        setModalText('Bot Wins!');
      } else {
        setModalText('Tie!');
      }
    }
  }, [p1Score, p2Score, gameStatus]);

  const [extraCards, setExtraCards] = useState(false);

  const modal =
  modalText.length > 0 ?
   <Modal text={modalText} setText={setModalText}/>
   : null;

  return (
    <>
    <TopControls>
      <CardsRemaining>
        {`Cards Remaining: ${deck.length}`}
      </CardsRemaining>
      <AddCardsBtn deck={deck} setExtraCards={setExtraCards}/>
      <StyledSelect
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
    </TopControls>

    {deck.length > 0
    && (
    <StyledBoard>
      {deck.slice(0, 12).map((card, index) => (
          <Card
            key={card.id}
            gameStatus={gameStatus}
            index={index}
            card={card}
            handleSelectCard={handleSelectCard}
            selected={
              selectedCards.map(selectedCard => selectedCard.id).includes(card.id)
            }
          />
      ))}

      {extraCards && deck.slice(12, 15).map((card, index) => (
        <Card
          key={card.id}
          gameStatus={gameStatus}
          index={index}
          card={card}
          handleSelectCard={handleSelectCard}
          selected={
            selectedCards.map(selectedCard => selectedCard.id).includes(card.id)
          }
        />
      ))}

      {modal}

    </StyledBoard>)}
    <BottomControls>
      <Scoreboard gameStatus={gameStatus} setGameStatus={setGameStatus} p1Score={p1Score} p2Score={p2Score} activePlayer={activePlayer} handleClickSet={handleClickSet} timeRemaining={timeRemaining} />
    </BottomControls>

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

const TopControls = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 80vw;
  margin-bottom: 2.5vh;
`;

const CardsRemaining = styled.div`
  color: grey;
`;

const BottomControls = styled.div`
  display: grid;

`;
