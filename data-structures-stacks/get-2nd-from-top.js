/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const topValue = stack.pop();
  if (topValue === undefined) {
    return undefined;
  } else {
    const secondTop = stack.peek();
    stack.push(topValue);
    return secondTop;
  }
}
