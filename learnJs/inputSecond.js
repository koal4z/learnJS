function inputSecond(second) {
  let h = 0;
  let m = 0;
  let s = 0;

  for (let i = 0; i < second; i++) {
    s++;
    if (s === 60) {
      m++;
      s = 0;
    }
    if (m === 60) {
      h++;
      m = 0;
    }
  }

  function checkLength(val) {
    if (val.toString().length < 2) {
      return "0" + val;
    } else {
      return val.toString();
    }
  }

  return [checkLength(h), checkLength(m), checkLength(s)].join(":");
}

module.exports = inputSecond;
