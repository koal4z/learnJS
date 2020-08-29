const { thirdMax } = require("../thirdMaximumNumber")

test('[3,2,1] should return 1"', () => {
  expect(thirdMax([3, 2, 1])).toStrictEqual(1)
})
test('[5,4,3,2,1] should return 3"', () => {
  expect(thirdMax([5, 4, 3, 2, 1])).toStrictEqual(3)
})
test('[1,2] should return 2"', () => {
  expect(thirdMax([1, 2])).toStrictEqual(2)
})
test('[1,1,1,2] should return 2"', () => {
  expect(thirdMax([1, 1, 1, 2])).toStrictEqual(2)
})
test('[1,1,2,2,3] should return 1"', () => {
  expect(thirdMax([1, 1, 2, 2, 3])).toStrictEqual(1)
})
test('[1,2,-2147483648] should return -2147483648"', () => {
  expect(thirdMax([1, 2, -2147483648])).toStrictEqual(-2147483648)
})
