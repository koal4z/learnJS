function count(n, s = 0, c = 0) {
  console.log(c)
  if (n > 0) {
    c++
    s = s + c
    return count(n - 1, s, c)
  }

  return `sum = ${s}`
}

// count(10)
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// sum = 55
