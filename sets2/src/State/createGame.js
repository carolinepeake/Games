
// could prolly make fully recursive
export const createDeck = () => {
  let deck = [];

  let shading = ['solid', 'banded', 'open'];
  let shape = ['oval', 'diamond', 'squiggle'];
  let color = ['green', 'purple', 'red'];
  let count = [1, 2, 3];

  let id = 0;

  const createCard = (card) => {
    // could make switch case
    // could make default argument an empty array
    // if (card.length === 0) {
      // console.log('in createCard');
    if (card.shading === undefined) {
      for (let i = 0; i < shading.length; i++) {
        // let cardCopy = card.slice();
        let cardCopy = {...card};
        // cardCopy.push(shading[i]);
        cardCopy.shading = shading[i];
        createCard(cardCopy);
      }
    // } else if (card.length === 1) {
    } else if (card.shape === undefined) {
      for (let i = 0; i < shape.length; i++) {
        // let cardCopy = card.slice();
        let cardCopy = {...card};
        // cardCopy.push(shape[i]);
        cardCopy.shape = shape[i];
        createCard(cardCopy);
      }
    // } else if (card.length === 2) {
    } else if (card.color === undefined) {
      for (let i = 0; i < color.length; i++) {
        // let cardCopy = card.slice();
        let cardCopy = {...card};
        // cardCopy.push(color[i]);
        cardCopy.color = color[i];
        createCard(cardCopy);
      }
    // } else if (card.length === 3) {
    } else if (card.count === undefined) {
      for (let i = 0; i < count.length; i++) {
        // let cardCopy = card.slice();
        let cardCopy = {...card};
        // cardCopy.push(count[i]);
        cardCopy.count = count[i];
        createCard(cardCopy);
      }
    } else if (Object.keys(card).length === 4) {
      card.id = id.toString();
      id++;
    // } else if (card.length === 4) {
      // console.log('card :', card);
      deck.push(card);
      return;
    }
    return;
  };

  createCard({});

  return deck;
};

export const shuffleDeck = (deck) => {
  let i = deck.length - 1;
  while (i > 0) {
  // generate random number
    let j = Math.floor(Math.random() * (i + 1));
    let nextCard = deck[j];
    deck[j] = deck[i];
    deck[i] = nextCard;
    i--;
  };
  return deck;
};

export const shuffledDeck = shuffleDeck(createDeck());
console.log('shuffled deck: ', shuffledDeck);

// if card was an array
// export const createDeck = () => {
//   let deck = [];

//   let shading = ['solid', 'banded', 'open'];
//   let shape = ['oval', 'diamond', 'squiggle'];
//   let color = ['green', 'purple', 'red'];
//   let count = [1, 2, 3];

//   const createCard = (card) => {
//     // could make switch case
//     // could make default argument an empty array
//     // if (card.length === 0) {
//     if (card.shading === undefined) {
//       for (let i = 0; i < shading.length; i++) {
//         // let cardCopy = card.slice();
//         let cardCopy = {...card};
//         // cardCopy.push(shading[i]);
//         cardCopy.shading = shading[i];
//         createCard(cardCopy);
//       }
//     // } else if (card.length === 1) {
//     } else if (card.length === 1) {
//       for (let i = 0; i < shape.length; i++) {
//         let cardCopy = card.slice();
//         cardCopy.push(shape[i]);
//         createCard(cardCopy);
//       }
//     } else if (card.length === 2) {
//       for (let i = 0; i < color.length; i++) {
//         let cardCopy = card.slice();
//         cardCopy.push(color[i]);
//         createCard(cardCopy);
//       }
//     } else if (card.length === 3) {
//       for (let i = 0; i < count.length; i++) {
//         let cardCopy = card.slice();
//         cardCopy.push(count[i]);
//         createCard(cardCopy);
//       }
//     } else if (card.length === 4) {
//       deck.push(card);
//       return;
//     }
//     return;
//   };

//   createCard({});

//   return deck;
// };