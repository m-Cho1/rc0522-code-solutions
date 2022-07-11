
function map(array, transform) {
  const mappedArr = [];

  for (let i = 0; i < array.length; i++) {
    const result = transform(array[i]);
    mappedArr.push(result);

  }
  return mappedArr;
}
