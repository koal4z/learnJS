const countBf = num => {
  let arr = []
  for (let i = 0; i < num; i++) {
    arr[i] = i + 1
  }
  let arr2 = [...arr].reverse().slice(1)
  let arr3 = [...arr, ...arr2]
  let arr4 = []
  arr3.forEach(el => {
    arr4.push(el)
    arr4.push(" ")
  })
  for (let i = 1; i < num; i++) {
    let arr5 = arr4.map(el =>
      el !== " " && el <= i
        ? el
        : el.toString(10).length >= 2
        ? " ".repeat(el.toString(10).length)
        : " "
    )
    console.log(arr5.join(""))
  }
  console.log(arr4.join(""))
  for (let i = num - 1; i > 0; i--) {
    let arr6 = arr4.map(el =>
      el !== " " && el <= i
        ? el
        : el.toString(10).length >= 2
        ? " ".repeat(el.toString(10).length)
        : " "
    )
    console.log(arr6.join(""))
  }
}

countBf(9)
