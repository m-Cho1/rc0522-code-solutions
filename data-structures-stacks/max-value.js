/* exported maxValue */

function maxValue(stack) {
  let maxValue = -Infinity;
  if (stack.peek() === undefined) {
    return maxValue;
  } else {
    while (stack.peek() !== undefined) {
      const topValue = stack.pop();
      if (topValue >= maxValue) {
        maxValue = topValue;
      }
    }
  }
  return maxValue;

}
