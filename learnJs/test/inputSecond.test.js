const inputSecond = require("../inputSecond");

test("input 0 output '00:00:00'", () => {
  expect(inputSecond(0)).toBe("00:00:00");
});

test("input 5 output '00:00:05'", () => {
  expect(inputSecond(5)).toBe("00:00:05");
});

test("input 60 output '00:01:00'", () => {
  expect(inputSecond(60)).toBe("00:01:00");
});

test("input 86399 output '23:59:59'", () => {
  expect(inputSecond(86399)).toBe("23:59:59");
});

test("input 359999 output '99:59:59'", () => {
  expect(inputSecond(359999)).toBe("99:59:59");
});
