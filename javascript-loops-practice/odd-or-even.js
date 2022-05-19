/* exported oddOrEven */
function oddOrEven(numbers) {
  var results = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      results.push('even');
    } else if (numbers[i] % 2 === 1) {
      results.push('odd');
    }
  }
  return results;
}
