const { base10To2Str  } = require("../recursive")

test('1 must return 1', () => {
  expect(base10To2Str (1)).toStrictEqual("1")
})

test('0 must return 0', () => {
  expect(base10To2Str (0)).toStrictEqual("0")
})

test('2 must return 10', () => {
  expect(base10To2Str (2)).toStrictEqual("10")
})

test('15 must return 01111', () => {
  expect(base10To2Str (15)).toStrictEqual("01111")
})

test('1986 must return 011111000010', () => {
  expect(base10To2Str (1986)).toStrictEqual("011111000010")
})


