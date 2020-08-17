function reverseArray(array) {
  const newArray = [];
  array.forEach((e, i) => {
    newArray[array.length - (1 + i)] = e;
  });
  return newArray;
}

module.exports = reverseArray;

