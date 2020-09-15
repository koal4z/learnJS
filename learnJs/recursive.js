exports.base10To2Str = n => {
  let bi = ""

  if (n < 2) {
    return n.toString()
  }
  const calTobi = n => {
    bi += n % 2
    if (n > 2) {
      calTobi(Math.floor(n / 2))
    } else {
      bi += Math.floor(n / 2)
    }
  }

  calTobi(n)
  console.log(bi)
  return bi.split("").reverse().join("")
}
