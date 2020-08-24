function checkSort(arr) {
  count = 0
  let sortArr = [...arr].sort((a, b) => a - b)
  arr.forEach((num, idx) => {
    if (num === sortArr[idx]) {
      count++
    }
  })

  return count === arr.length ? true : false
}

module.exports = checkSort
