module.exports = num => {
  const Obj = { 3: "Fizz", 5: "Buzz", 15: "FizzBuzz" }
  const check3n5 = n => !(n % 3 === 0 && n % 5 === 0) || 15
  const check5 = n => !(n % 5 === 0) || 5
  const check3 = n => !(n % 3 === 0) || 3
  return Obj[check3n5(num)] || Obj[check5(num)] || Obj[check3(num)] || num
}
