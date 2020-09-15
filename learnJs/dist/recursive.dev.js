"use strict";

var binaryString = "";

function base10ToString(n) {
  function base10ToStringHelper(n) {
    base10ToStringHelper(n);
    return binaryString;
  }

  if (n < 2) {
    binaryString += n;
    return;
  } else {
    base10ToStringHelper(Math.floor(n / 2));
    base10ToStringHelper(n % 2);
  }
}

console.log(base10ToString(232)); // 111010001110101011011

var bi = "";

var base10ToStr = function base10ToStr(n) {
  // n หาร 2 เพื่อลดลง จนหารไม่ได้อีก เหลือ 1
  // n mod 2  เอาเศษไปเก็บเป็นสตริง
  bi += n % 2;

  if (n > 2) {
    base10ToStr(Math.floor(n / 2));
  } else {
    console.log(n);
    bi += n;
  } // นำไปรวมสตริง

};

base10ToStr(232); //011101000

console.log(bi);