/* exported countdown */
function countdown(number) {
  var counts = [];
  for (var i = number; i >= 0; i--) {
    counts.push(i);
  }
  return counts;
}
