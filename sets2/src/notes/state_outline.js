state ={
  deck: Card[]: {
    deck.length === 0 && setGameStatus('ended')
  },
  player1Cards: Card[],
  player2Cards: Card[],
  gameStatus:
}

Card = string.length(4);
  Card[0] = 's' || 'o' || 'b';
  Card[1] =
  Card[2] =
  Card[3] = '1' || '2' || '3';

  // the transfer of cards from the deck to a players discard pile, (and to the board intermediary) must be a closed transaction
    // one step should not complete if they don't all complete
     // ca count total length of the arrays at the ends to double check
      // can write this in test

<APP>
  <Header>
    <LeftButton
      onClick: setGameStatus
    >
      {leftButtonText: gameStatus}
    </LeftButton>
    <RightButton
      onClick: setGameStatus
    >
      {rightButtonText: gameStatus}
    </RightButton>
    <Timer
      reset, start, stop: gameStatus
    >
      {time: local_state}
    </Timer>
  </Header>
  <Main
    {children = gameStatus === 'ended' ? <Winner/> : <Board/>}
  >
    <Board>
      cards: deck
      flipped: gameStatus
      selectedCards = Card[], local_state
      activePlayer = local_state or local const: {
        disable click cards: !activePlayer,
        internal timer: local_state or local const: {
          activePlayer ? start : reset,
          cutOffTime: !activePlayer: {
            selectedCards: initialState [],
            internal timer: initilState 0:00,
          }

        }
      }
      onSelectCard = {
        change UI of selectedCard: (pass on selectedState)
        once3CardsSelected: check if valid set: {
          valid set: add 3 cards to player who clicked
        }
      }
      <Card
        flipped
        selected
        key: {
          fill, color, shape, number
        }
      >

      </Card>
      <Winner>
        winner: 2 of player1Cards || player2Cards || deck

      </Winner>
    </Board>
  </Main>
</APP>