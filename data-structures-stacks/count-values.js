/* exported countValues */

function countValues(stack) {
  let countValue = 0;
  if (stack.peek() === undefined) {
    return countValue;
  } else {
    while (stack.pop() !== undefined) {
      countValue++;
    }
    return countValue;
  }

}
