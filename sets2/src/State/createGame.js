
// could prolly make fully recursive
const createDeck = () => {
  let deck = [];

  let shading = ['solid', 'striped', 'open'];
  let shape = ['oval', 'diamond', 'squiggle'];
  let color = ['green', 'purple', 'red'];
  let count = [1, 2, 3];

  const createCard = (card) => {
    // could make switch case
    // could make default argument an empty array
    if (card.length === 0) {
      for (let i = 0; i < shading.length; i++) {
        let cardCopy = card.slice();
        cardCopy.push(shading[i]);
        createCard(cardCopy);
      }
    } else if (card.length === 1) {
      for (let i = 0; i < shape.length; i++) {
        let cardCopy = card.slice();
        cardCopy.push(shape[i]);
        createCard(cardCopy);
      }
    } else if (card.length === 2) {
      for (let i = 0; i < color.length; i++) {
        let cardCopy = card.slice();
        cardCopy.push(color[i]);
        createCard(cardCopy);
      }
    } else if (card.length === 3) {
      for (let i = 0; i < count.length; i++) {
        let cardCopy = card.slice();
        cardCopy.push(count[i]);
        createCard(cardCopy);
      }
    } else if (card.length === 4) {
      deck.push(card);
      return;
    }
    return;
  };

  createCard([]);

  return deck;
};

const shuffleDeck = (deck) => {
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