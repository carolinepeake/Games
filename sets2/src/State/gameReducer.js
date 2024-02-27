import { getNewDeck } from './createGame';

export const getSet = (deck, cardsShowing) => {
  let startIndex = 0; // let startIndex = Math.floor(Math.random() * 12);
  let secondCard = startIndex + 1;
  let thirdCard = startIndex + 2;
  while (startIndex < cardsShowing - 2) {
    while (secondCard < cardsShowing - 1) {
      while (thirdCard < cardsShowing) {
        let selection = [];
        let card1 = deck[startIndex];
        card1.index = startIndex;
        let card2 = deck[secondCard];
        card2.index = secondCard;
        let card3 = deck[thirdCard];
        card3.index = thirdCard;
        selection.push(card1, card2, card3);

        if (checkSet(selection)) {
          return selection;
        }
        thirdCard++
      }
      secondCard++
      thirdCard = secondCard + 1;
    }
    startIndex ++;
    secondCard = startIndex + 1;
    thirdCard = secondCard + 1;
  }
  return null;
};

export const checkFeature = (selectedCards, feature) => {
  const featureValues = selectedCards.map(card => card[feature]);
  const uniqueValues = [...new Set(featureValues)];
  return !(uniqueValues.length === 2);
};

export const checkSet = (set) => {
  if (!checkFeature(set, 'color')) {
    return false;
  }
  if (!checkFeature(set, 'shading')) {
    return false;
  }
  if (!checkFeature(set, 'shape')) {
    return false;
  }
  if (!checkFeature(set, 'count')) {
    return false;
  }

  return true;
};

export const replaceCards = (deck, set) => {
  const emptyCells = set.map(card => card.index);

  for (let i = 0; i < emptyCells.length; i++ ) {
    deck.splice(emptyCells[i], 1, deck[12]);
    deck.splice(12, 1);
  }

  return deck;
};

export const checkForWin = (deck) => {
  if (deck.length === 0) {
    return true;
  }
  if (deck.length >= 21 || deck.length === 3) {
    return false;
  }

   // check if no set in remaining cards in deck
  if (getSet(deck) === null) {
    return true
  }

  return false;
};

// display winner text only if game completed; otherwise display playersboard only
export const getWinner = (players) => {
  let winners = [];
  let lrgstSetCnt = 0;
  let totalSetCnt = 0;
    for (const player in players) {
      // const id = `${player}`;
      console.log('player: ', player);
      const id = player;
      const { setCnt } = players[player];
      totalSetCnt += setCnt;
      if (setCnt > lrgstSetCnt) {
        winners = [id];
        lrgstSetCnt = setCnt;
      } else if (setCnt === lrgstSetCnt) {
        winners.push(id);
      }
    }

    if (totalSetCnt < 21 || totalSetCnt > 27) {
      console.error("impossible total sets count");
      return;
    }

    if (winners.length === 1) {
      const winner = winners[0];
      return `${players[winner].name} wins!`;
    } else {
      return 'Tie!';
    }
};

export const getBotSpeed = (difficulty) => {
  let botSpeed;
  if (difficulty === '3') {
    botSpeed = 30000;
  } else if (difficulty === '2') {
    botSpeed = 20000;
  } else {
    botSpeed = 10000;
  }
  return botSpeed;
};

const clone = x => JSON.parse(JSON.stringify(x));

export const getInitialState = () => ({
  status: 'idle',
  deck: getNewDeck(),
  board: [], // boardSize: 12 // don't need both boardSize and board b/c can just grow bo  ard when 3 more cards button clicked
  cardsShowing: 12,
  selectedCards: [],
  isSet: null, // null, false, true => module state isVisible && text
  activePlayer: undefined, // || '01' || '02'
  players: {
    '01': {
      name: 'Player 1 (You)',
      setCnt: 0,
    },
    '02': {
      name: 'Player 2 (Bot)',
      setCnt: 0,
    },
  },
  difficulty: '1',
  timeRemaining: 10,
});

export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'START': {
      const newState = clone(state);
      newState.status = 'started';
      return newState;
    }

    case 'QUIT': {
      const newState = clone(state);
      newState.status = 'ended';
      return newState;
    }

    case 'PAUSE': {
      const newState = clone(state);
      newState.status = 'paused';
      return newState;
    }

    case 'RESUME': {
      const newState = clone(state);
      newState.status = 'resumed';
      return newState;
    }

    case 'CLICK_SET': {
      const newState = clone(state);
      const { activePlayer, timeRemaining } = newState;
      if (activePlayer !== undefined) {
        return newState;
      }
      newState.activePlayer = action.payload;
      newState.timeRemaining = timeRemaining - 1;
      return newState;
    }

    case 'SELECT_CARD': {
      const newState = clone(state);
      const { selectedCards, activePlayer, players } = newState;
      const { card, player } = action.payload;

      if (player !== activePlayer) {
        return newState;
      }
      if (selectedCards.map(selectedCard => selectedCard.id).includes(card.id)) {
        return newState;
      }

      selectedCards.push(card);
      newState.selectedCards = selectedCards;

      if (selectedCards.length === 3) {
        const isSet = checkSet(selectedCards);
        newState.isSet = isSet;
        newState.timeRemaining = 10;
        if (isSet) {
          const newScore = players[activePlayer].setCnt + 1;
          newState.players[activePlayer].setCnt = newScore;
        }
      }
      return newState;
    }

    case 'DEAL': {
      const newState = clone(state);
      const { isSet, deck, selectedCards, players } = newState;

      if (isSet === true) {
        const newDeck = replaceCards(deck, selectedCards);
        newState.deck = newDeck;
        newState.cardsShowing = Math.min(12, newDeck.length);

        if (checkForWin(newDeck)) {
          const scoreboardText = getWinner(players); // not in globl state
          console.log('scoreboard: ', scoreboardText);
          newState.status = 'ended';
        }
      }

      newState.isSet = null;
      newState.selectedCards = [];
      newState.activePlayer = undefined;
      return newState;
    }

    case 'COUNTDOWN': {
      const newState = clone(state);
      const { timeRemaining } = newState;
      newState.timeRemaining = timeRemaining - 1;
      return newState;
    }

    case 'TIMEOUT': {
      const newState = clone(state);
      newState.isSet = null;
      newState.selectedCards = [];
      newState.activePlayer = undefined;
      newState.timeRemaining = 10;
      return newState;
    }

    case 'RUN_BOT': {
      const newState = clone(state);
      const { deck, cardsShowing, players, status } = newState;

      if (!(status === 'started' || status === 'resumed')) {
        return newState;
      }

      const set = getSet(deck, cardsShowing);
      console.log('set: ', set);
      if (set.length === 3) {
        newState.selectedCards = set;
        newState.activePlayer = '02';
        newState.isSet = true;
        const newScore = players['02'].setCnt + 1;
        newState.players['02'].setCnt = newScore;
      }
      return newState;
    }

    case 'ADD_CARDS': {
      if (state.deck.length >= 15) {
        return state;
      }
      const newState = clone(state);
      newState.cardsShowing = 15;
      return newState;
    }

    case 'SELECT_DIFFICULTY': {
      if (state.difficulty === action.payload) {
        return state;
      }

      const newState = clone(state);
      newState.difficulty = action.payload;
      return newState;
    }

    default:
      console.error(action.type, "with a ", action.payload, "payload, is an unknown action type in gameReducer");
      return state
  }
};




