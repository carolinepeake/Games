import { getNewDeck } from './createGame';
import { checkSet, getSet, replaceCards } from '../utils/gamePlay';

// TODO: add action for changing status and status state
// TODO: add CLICK_SET action and turn state
// TODO: add TIMEOUT action
// TODO: add ADD_CARDS action and maybe board size state

const clone = x => JSON.parse(JSON.stringify(x));

export const getInitialState = () => ({
  status: 'idle',
  deck: getNewDeck(),
  board: [],
  cardsShowing: 12,
  selectedCards: [],
  set: null,
  turn: null,
  score: [0, 0],
  difficulty: 'easy',
  timeRemaining: 10,
});

export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'START': {
      const newState = clone(state);
      newState.status = 'started';
      return newState;
    }

    case 'CLICK_SET': {
      const newState = clone(state);
      newState.turn = action.payload;
      return newState;
    }

    case 'SELECT_CARD': {
      const newState = clone(state);
      const { selectedCards, turn } = newState;

      // if player didn't click set or card already selected do nothing
      const { card, player } = action.payload;

      if (player !== turn) {
        return state;
      }
      if (selectedCards.map(selectedCard => selectedCard.id).includes(card.id)) {
        return state;
      }

      // if not selected, update selectedCards state
      selectedCards.push(action.payload);

      // if 3 cards selected, check if set
      if (selectedCards.length === 3) {
        newState.set = checkSet(selectedCards);
        // TODO: update score
      }

      newState.selectedCards = selectedCards;
      return newState;
    }

    case 'CONTINUE': {
      const newState = clone(state);
      const { deck, selectedCards } = newState;

      const newDeck = replaceCards(deck, selectedCards);

      newState.deck = newDeck;
      newState.cardsShowing = 12;
      newState.set = null;
      newState.selectedCards = [];
      newState.timeRemaining = 10;
      newState.turn = null;

      return newState
    }

    case 'CLEAR': {
      const newState = clone(state);
      newState.set = null;
      newState.selectedCards = [];
      newState.timeRemaining = 10;
      return newState
    }

    case 'COUNTDOWN': {
      const newState = clone(state);
      const { timeRemaining } = newState;
      newState.timeRemaining = timeRemaining - 1;
      return newState;
    }

    case 'ADD_CARDS': {
      const newState = clone(state);
      newState.cardsShowing = 15;
      return newState;
    }

    case 'SELECT_DIFFICULTY': {

      const newState = clone(state);
      newState.difficulty = action.payload;

      return newState;
    }

    default:
      return state
  }
};