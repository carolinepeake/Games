// TODO: add action for changing status and status state
// TODO: add TIMEOUT action

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



case: CHECK_FOR_WIN {
  const newState = clone(state);

  if (checkForWin(deck)) {
    const scoreboardText = getWinner(players);
    console.log('scoreboard: ', scoreboardText);
    newState.status = 'ended';
  }
  return newState;
}