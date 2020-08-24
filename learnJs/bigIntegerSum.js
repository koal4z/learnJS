const bigIntSum = (str1, str2) => {
  if (
    !str1 ||
    !str2 ||
    isNaN(parseInt(str1, 10)) ||
    isNaN(parseInt(str2, 10))
  ) {
    throw new Error("Must have String of Number!!!")
  }

  let arr1 = str1.split("")
  let arr2 = str2.split("")

  if (arr1.length !== arr2.length) {
    const maxLength = Math.max(arr1.length, arr2.length)
    const minLength = Math.min(arr1.length, arr2.length)
    let addLength = maxLength - minLength

    if (arr1.length === maxLength) {
      while (addLength > 0) {
        arr2.unshift(0)
        addLength--
      }
    } else {
      while (addLength > 0) {
        arr1.unshift(0)
        addLength--
      }
    }
  }
  let fNum, lNUm
  let ansN = []
  for (let i = 0; i < arr1.length; i++) {
    fNum = parseInt(arr1[arr1.length - 1 - i])
    lNum = parseInt(arr2[arr2.length - 1 - i])

    if (fNum + lNum >= 10) {
      if (i === arr1.length - 1) {
        ansN.unshift((fNum + lNum).toString())
      } else {
        ansN.unshift(((fNum + lNum) % 10).toString())
        arr1[arr1.length - 1 - 1 - i] = (
          parseInt(arr1[arr1.length - 1 - 1 - i]) + 1
        ).toString()
      }
    } else {
      ansN.unshift((fNum + lNum).toString())
    }
  }

  const zero = num => num > 0
  if (ansN.findIndex(zero) > 0) {
    ansN.splice(0, ansN.findIndex(zero))
  }

  return console.log(ansN.join(""))
}

bigIntSum("23163543513513513511479", "35135135135135132135135135135")
// will return 35135158298678645648648646614
