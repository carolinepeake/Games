
// could prolly make fully recursive
const createCards = () => {
  let cards = [];

  const shading = ['solid', 'banded', 'open'];
  const shape = ['oval', 'diamond', 'squiggle'];
  const color = ['green', 'purple', 'red'];
  const count = [1, 2, 3];

  let id = 0;

  const createCard = (card = {}) => {
    // could make switch case
    if (card.shading === undefined) {
      for (let i = 0; i < shading.length; i++) {
        let cardCopy = {...card};
        cardCopy.shading = shading[i];
        createCard(cardCopy);
      }
    } else if (card.shape === undefined) {
      for (let i = 0; i < shape.length; i++) {
        let cardCopy = {...card};
        cardCopy.shape = shape[i];
        createCard(cardCopy);
      }
    } else if (card.color === undefined) {
      for (let i = 0; i < color.length; i++) {
        let cardCopy = {...card};
        cardCopy.color = color[i];
        createCard(cardCopy);
      }
    } else if (card.count === undefined) {
      for (let i = 0; i < count.length; i++) {
        let cardCopy = {...card};
        cardCopy.count = count[i];
        createCard(cardCopy);
      }
    } else if (Object.keys(card).length === 4) {
      card.id = id.toString();
      id++;
      cards.push(card);
      return;
    }
    return;
  };

  // createCard({});
  createCard();

  return cards;
};

export const unshuffledDeck = createCards();

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

// this would export the same deck every time?
// export const shuffledDeck = shuffleDeck(createDeck());

export const getNewDeck = () => shuffleDeck(unshuffledDeck);