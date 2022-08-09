/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const frontValue = queue.dequeue();
  const secondValue = queue.dequeue();
  if (frontValue < secondValue) {
    queue.enqueue(secondValue);
    return frontValue;
  }
  if (frontValue === secondValue) {
    queue.enqueue(frontValue);
    return secondValue;
  }
  if (frontValue > secondValue) {
    queue.enqueue(frontValue);
    return secondValue;
  }
  return frontValue;
}
