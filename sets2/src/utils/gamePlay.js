function checkCharacteristic(characteristic, set) {
  const values = set.map(card => card.characteristic);
  const distinctiveValues = [...new Set(values)];
  if (distinctiveValues.length === 2) {
    return false;
  }
  return true;
};

export function checkSet(set) {
  // let fill = selectedCards.map(card => card.shading);
  // let shape = selectedCards.map(card => card.shape);
  // let color = selectedCards.map(card => card.color);
  // let count = selectedCards.map(card => card.count);



  // selectedCards.reduce(set, () => {

    const characteristics = ['shadings', 'shapes', 'numbers', 'colors'];

    for (let i = 0; i < characteristics.length; i++) {
      if (!checkCharacteristic(characteristics[i], set)) {
        return false;
      }
    }
    return true;
    // return checkCharacteristic() && accumulator

  // }, true);

  //   return (accumulator &&
  // )

  // const distinctiveFill = [...new Set(fill)];
  // const distinctiveShape = [...new Set(shape)];
  // const distinctiveColor = [...new Set(color)];
  // const distinctiveCount = [...new Set(count)];

  // if (distinctiveFill.length === 2) {
  //   return false;
  // }
  // if (distinctiveShape.length === 2) {
  //   return false;
  // }
  // if (distinctiveColor.length === 2) {
  //   return false;
  // }
  // if (distinctiveCount.length === 2) {
  //   return false;
  // }

  // return true;
};