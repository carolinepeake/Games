export function checkSelection(selectedCards) {
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