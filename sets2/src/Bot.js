import React from 'react';
import { unshuffledDeck, shuffleDeck } from './State/createGame';


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
    }

    return;
    // return false;
  };

  if (gameStatus === 'started') {
    let timeout = setTimeout(() => runBot(), 1000);
  }
  return timeout;

}, [gameStatus]);

  // function runBot = () => {

  //   function checkSelection(selectedCards) {
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

  //   let selection;

  //   let startIndex = 0; // let startIndex = Math.floor(Math.random() * 12);
  //   let secondCard = startIndex + 1;
  //   let thirdCard = startIndex + 2;

  //   while (startIndex <= 9) {
  //     while (secondCard <= 10) {
  //       while (thirdCard <= 11) {
  //         let card1 = deck[startIndex];
  //         card1.index = startIndex;
  //         let card2 = deck[secondCard];
  //         card2.index = secondCard;
  //         let card3 = deck[thirdCard];
  //         card3.index = thirdCard;
  //         selection = [card1, card2, card3];
  //         let checkSelection(selection) = isSet;
  //         if (isSet) {
  //           setSelectedCards(selection);
  //           return;
  //           // return selection;
  //         }
  //         thirdCard++;
  //       }
  //       secondCard++;
  //       thirdCard = secondCard + 1;
  //     }
  //     startIndex ++;
  //     secondCard = startIndex + 1;
  //   }

  //   return;
  //   // return false;
  // };

  // for (let nextCard = ; )

  // possibleSet = [deck[startIndex], deck[startIndex + 1], deck[startIndex + 2]];

  // checkSelection(possibleSet);


  // TODO: pick an index 0-12 to start checking for sets





  // start

  // make selected set with the picked index, the one after it, and the one after it
  // check set

  // make selected set with the picked index, the one after it, and 2 after it
  // check set

  // do this 10 times

  // make selected set with the picked index, two after it, 3 after it
  // check set

  // do this 9 times





