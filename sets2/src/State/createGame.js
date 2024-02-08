const createCards = () => {
  const cards = [];

  const numbers = [1, 2, 3];
  const shadings = ['solid', 'banded', 'open'];
  const shapes = ['oval', 'diamond', 'squiggle'];
  const colors = ['green', 'purple', 'red'];

  let id = 0;

    for (let i = 0; i < 81; i++) {

      const card = {};

      card.number = numbers[i % 3];
      card.shading = shadings[Math.floor(i / 3) % 3];
      card.shape = shapes[Math.floor(i / 9) % 3];
      card.color = colors[Math.floor(i / 27) % 3];
      card.id = id.toString();

      cards.push(card);

      id++;
    }

  return cards;
};

const shuffle = (cards) => {
  let i = cards.length - 1;
  while (i > 0) {
  // generate random number
    let j = Math.floor(Math.random() * (i + 1));
    let nextCard = cards[j];
    cards[j] = cards[i];
    cards[i] = nextCard;
    i--;
  };
  return cards;
};

// const padDeck = (cards) => {
//   let id = 81;

//   for (let i = 0; i < 12; i++) {

//     const blankCard = {
//       id: id.toString(),
//     };

//     cards.push(blankCard);

//     id++
//   }

//   return cards;
// };

const cards = createCards();

// export const getNewDeck = () => padDeck(shuffle(cards));

export const getNewDeck = () => shuffle(cards);