const { shotLong } = require("../shotLong")

test('"45","1" should return "1451"', () => {
  expect(shotLong("45", "1")).toStrictEqual("1451")
})

test('"13","200" should return "1320013"', () => {
  expect(shotLong("13", "200")).toStrictEqual("1320013")
})

test('"U","False" should return "UFalseU"', () => {
  expect(shotLong("U", "False")).toStrictEqual("UFalseU")
})

test('"J","S" should return "JS"', () => {
  expect(shotLong("J", "S")).toStrictEqual("JS")
})
