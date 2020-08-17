const reverseArray = require('../reverseArray');

test('reverseArray([1,2,3]) should return [3,2,1]', () => {
  expect(reverseArray([1, 2, 3])).toStrictEqual([3, 2, 1]);
});

test('reverseArray([1,null,14,"two"]) should return ["two",14,null,1]', () => {
  expect(reverseArray([1, null, 14, 'two'])).toStrictEqual(['two', 14, null, 1]);
});
