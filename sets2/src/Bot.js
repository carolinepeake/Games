


const

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

  let possibleSet = [];

  // let startIndex = Math.floor(Math.random() * 12);
  let startIndex = 0;

  possibleSet = [deck[startIndex], deck[startIndex + 1], deck[startIndex + 2]];

  checkSelection(possibleSet);






  // pick an index 0-12 to start checking for sets
  // make  selected set with the picked index, the one after it, and the one after it
  // check set
  // make selected set with the picked index, the one after it, and 2 after it
  // check set





