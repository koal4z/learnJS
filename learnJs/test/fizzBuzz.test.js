const checkFizzBuzz = require('../fizzBuzz');

test('input 6 will return "Fizz"', () => {
  expect(checkFizzBuzz(6)).toBe('Fizz');
});

test('input 10 will return "Buzz"', () => {
  expect(checkFizzBuzz(10)).toBe('Buzz');
});

test('input 15 will return "FizzBuzz"', () => {
  expect(checkFizzBuzz(15)).toBe('FizzBuzz');
});

test('input 17 will return 17', () => {
  expect(checkFizzBuzz(17)).toBe(17);
});

test('input 35 will return "Buzz"', () => {
  expect(checkFizzBuzz(35)).toBe('Buzz');
});

test('input 30 will return "FizzBuzz"', () => {
  expect(checkFizzBuzz(30)).toBe('FizzBuzz');
});

test('input 100 will return "Buzz"', () => {
  expect(checkFizzBuzz(100)).toBe('Buzz');
});
