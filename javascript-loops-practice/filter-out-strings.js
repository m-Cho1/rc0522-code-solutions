/* exported filterOutStrings */
function filterOutStrings(values) {
  var filtered = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) !== 'string') {
      filtered.push(values[i]);
    }
  }
  return filtered;
}
