exports.shotLong = (s1, s2) => {
  const l1 = s1.length;
  const l2 = s2.length;
  return l1 === l2 ? s1 + s2 : l1 > l2 ? s2 + s1 + s2 : s1 + s2 + s1;
};
