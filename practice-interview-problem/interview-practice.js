function getRangeReport(start, end) {
  var results = {
    total: null,
    odds: [],
    evens: [],
    average: null,
    range: []
  };
  for (var i = start; i <= end; i++) {
    results.total += i;
    results.range.push(i);
    if (i % 2 === 0) {
      results.evens.push(i);
    } else if (i % 2 === 1) {
      results.odds.push(i);
    }
  }
  results.average = results.total / results.range.length;
  return results;
}

getRangeReport(1, 10);
