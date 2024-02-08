import { getNewDeck } from './createGame';

// TODO: add action for changing status and status state
// TODO: add TIMEOUT action
// TODO: add ADD_CARDS action and maybe board size state

export const getSet = (deck, cardsShowing) => {
  for (let i = 0; i < cardsShowing.length - 2; i++) {
    let selection = [];
    let card = deck[i];
    card.index = i;
    selection.push(card);

    for (let j = 1; j < cardsShowing.length - 1; j++) {
      let card = deck[j];
      card.index = j;
      selection.push(card);

      for (let k = 2; k < cardsShowing.length; k++) {
        let card = deck[k];
        card.index = k;
        selection.push(card);

        if (checkSet(selection)) {
          return selection;
        };
      }
    }
  }
};

//   let startIndex = 0; // let startIndex = Math.floor(Math.random() * 12);
//   let secondCard = startIndex + 1;
//   let thirdCard = startIndex + 2;

//   let cardsShowing;
//   if (deck.length > board) {
//   cardsShowing = board;
//   } else {
//   cardsShowing = deck.length;
//   }

// while (startIndex <= cardsShowing - 3) {
//   while (secondCard <= cardsShowing - 2) {
//     while (thirdCard <= cardsShowing - 1) {
//       let card1 = deck[startIndex];
//       card1.index = startIndex;
//       let card2 = deck[secondCard];
//       card2.index = secondCard;
//       let card3 = deck[thirdCard];
//       card3.index = thirdCard;
//       selection.push(card1, card2, card3);
//       const isSet = checkSet(selection);
//       if (isSet) {

//       }
//       thirdCard++;
//     }
//     secondCard++;
//     thirdCard = secondCard + 1;
//   }
//   startIndex ++;
//   secondCard = startIndex + 1;
//   thirdCard = secondCard + 1;
// }
// return;
// };

export const checkFeature = (selectedCards, feature) => {
  const featureValues = selectedCards.map(card => card[feature]);
  const uniqueValues = [...new Set(featureValues)];
  return !(uniqueValues.length === 2);
};

export const checkSet = (selectedCards) => {
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
  // return (checkFeature(set, 'color') && checkFeature(set, 'count') && checkFeature(set, 'shape') && checkFeature(set, 'shading'))
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

  return true;
};

// display winner text only if game completed; otherwise display playersboard only
export const getWinner = (players) => {
  let winners = [];
  // let lrgstSetCnt = 0;
  let totalSetCnt = 0;
    for (const player in players) {
      // ({[id] : { setCnt, name }} = player);
      const id = `${player}`; // const id = player;
      const { setCnt, name } = players[player];
      const { setCnt2, name2 } = players[player];
      const { playerobject3 } = players[id];
      totalSetCnt += setCnt;
      let lrgstSetCnt = players[winners[0]].score;
      console.log('setCnt: ', setCnt, 'setCnt2: ', setCnt2, 'name: ', name, 'name2: ', name2, 'id: ', id, 'player: ', player, 'players: ', players, 'totalSetCnt :', totalSetCnt, 'playerobject3', playerobject3, 'id', id);
      if (setCnt > lrgstSetCnt) {
        winners = [id];
        // winners = [ player ];
        // lrgstSetCnt = setCnt;
      } else if (setCnt === lrgstSetCnt) {
        winners.push(id);
      }
    }
    // if !(21 <= totalSetCnt && totalSetCnt >= 27) // learn how to write sysinctly
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

// Test
export const winnerText = getWinner({
  '01': {
    name: 'player1',
    setCnt: 2,
  },
  '02': {
    name: 'player2',
    setCnt: 20,
  },
  '03': {
    name: 'player3',
    setCnt: 2,
  },
});
console.log('winnerText', winnerText);


const clone = x => JSON.parse(JSON.stringify(x));

export const getInitialState = () => ({
  status: 'idle', // starting, inPlay, paused, ended
    // idle, start, pause, resume, end
  deck: getNewDeck(),
  board: [],
  cardsShowing: 12,
  // boardSize: 12 // don't need both boardSize and board b/c can just grow board when 3 more cards button clicked
  selectedCards: [],
  // set: [],
  isSet: null, // null, false, true => module state isVisible && text
  // turn: null,
  activePlayer: '', // '', 'player1' || '0', 'player2' || '01'
  // score: [0, 0],
  players: {
    '01': {
      name: 'player1',
      setCnt: 0,
    },
    '02': {
      name: 'bot',
      setCnt: 0,
    },
    // '03': {
    //   name: 'player3',
    //   setCnt: 0,
    // },
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

    // case 'GAME_OVER': {
    //   const newState = clone(state);
    //   newState.status = 'ended';
    //   return newState;
    // }

    case 'PAUSE': {
      const newState = clone(state);
      newState.status = 'pause';
      return newState;
    }

    case 'RESUME': {
      const newState = clone(state);
      newState.status = 'inPlay';
      return newState;
    }

    // case 'PLAY': {
    //   const newState = clone(state);
    //   newState.status = 'inPlay';
    //   return newState;
    // }

    case 'CLICK_SET': {
      if (state.activePlayer) {
        return state;
      }
      const newState = clone(state);
      newState.activePlayer = action.payload;
      return newState;
    }

    case 'SELECT_CARD': {
      const newState = clone(state);
      const { deck, selectedCards, activePlayer, players } = newState;
      const { card, player } = action.payload;

      if (player !== activePlayer) {
        return state;
      }
      if (selectedCards.map(selectedCard => selectedCard.id).includes(card.id)) {
        return state;
      }

      selectedCards.push(card);
      newState.selectedCards = selectedCards;

      if (selectedCards.length === 3) {
        const isSet = checkSet(selectedCards);
        if (isSet) {
          // setFound(); TODO: write function // might have function be an action dispatched as part of gameSettingsReducer
            // maybe trying to divide too much; doesn't neatly separate
          // could be a dispatch to gameSettingsReducer (this would be gamePlayReducer)
            // TODO: update players' scores (players, difficulty, status = gameSettings)
            const newDeck = replaceCards(deck, selectedCards);
            newState.deck = newDeck;
            newState.cardsShowing = Math.min(12, newDeck.length);
        } else {
          // alert(isSet[1]);
         // setNotFound(); TODO: write function // might be sufficient to just show alert
        }
        newState.isSet = isSet;
        setTimeout(() => {
          // this.currentSet[0].bg = this.color2;
          // this.currentSet[1].bg = this.color2;
          // this.currentSet[2].bg = this.color2;
          // this.setState({ clicked: 0 });
          // const isSet = checkSet(selectedCards);
          newState.isSet = null;
          // if (isSet) {
          //   setFound();
          // } else {
          //   alert(isSet[1]);
          // }
          // newState.isSet = isSet;
          newState.selectedCards = [];
          newState.timeRemaining = 10;
          // newState.turn = null;
          newState.activePlayer = '';

          // if (checkForWin == true), might want to dispatch action from gameSettingsReducer (settings / context?) (perhaps simply changing status state and/or calling getWinner function)
          // and dispatch CHECK_FOR_WIN action from within the SELECT_CARD action
          if (checkForWin(deck)) {
            // can checkForWin outside of timeout, but then dispatch END_GAME (as opposed to QUIT_GAME) action in gameSettingsReducer
            // END_GAME can update status, and run the getWinner function
            const scoreboardText = getWinner(players);
            console.log('scoreboard: ', scoreboardText);
            newState.status = 'ended';
          }
          console.log('timeout newState: ', newState);
          return newState;
        }, 500);
      }
      console.log('newState: ', newState);
      return newState;
    }

    // case 'COUNTDOWN': {
    //   const newState = clone(state);
    //   const { timeRemaining } = newState;
    //   newState.timeRemaining = timeRemaining - 1;
    //   return newState;
    // }

    case 'ADD_CARDS': {
      if (state.deck.length < 15) {
        return state;
      }
      const newState = clone(state);
      newState.cardsShowing = 15;
      return newState;

    }

    // maybe move to gameSettingsReducer
    case 'SELECT_DIFFICULTY': {
      if (state.difficulty === action.payload) {
        return state;
      }
      const newState = clone(state);
      newState.difficulty = action.payload;
      // DIFFICULTY_VALUES = obj providing milliseconds and dropdown label values for state values in gameConstants file
      return newState;
    }

    default:
      console.error(action.type, "with a ", action.payload, "payload, is an unknown action type in gameReducer");
      return state
  }
};


  // G: {
  //   selectedCards: [],
  //   p1Score: 0,
  //   p2Score: 0,
  //   activePlayer: '', //null
  //   difficulty: 'easy',
  //   extraCards: false,
  //   modalText: '',
  // };

  // moves: {
  //   clickSet: ,
  //   selectCard: ,
  //   restartGame: ,
  //   endGame: ,
  //   startGame: ,
  //   pauseGame: ,
  //   resumeGame: ,
  //   invalidSet: ,
  //   findSet: ,
  //   timeOut: ,
  // }
