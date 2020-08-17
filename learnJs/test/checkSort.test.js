const checkSort = require('../checksort');

test('input [1,2,4,7,19] return true', () => {
  expect(checkSort([1, 2, 4, 7, 19])).toBe(true);
});

test('input [1,2,3,4,5] return true', () => {
  expect(checkSort([1, 2, 3, 4, 5])).toBe(true);
});

test('input [1,6,10,18,2,4,20] return true', () => {
  expect(checkSort([1, 6, 10, 18, 2, 4, 20])).toBe(false);
});

test('input [9,8,7,6,5,4,3,2,1] return true', () => {
  expect(checkSort([9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(false);
});
