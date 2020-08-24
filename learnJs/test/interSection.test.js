const { intersection } = require("../interSection");

test("['red','green','blue','yellow'] and ['black','red','yellow','purple'] should return  ['red','yellow']", () => {
  expect(
    intersection(
      ["red", "green", "blue", "yellow"],
      ["black", "red", "yellow", "purple"]
    )
  ).toStrictEqual(["red", "yellow"]);
});

test("[1, 2, 2, 1] and [2, 2] should return [2]", () => {
  expect(intersection([1, 2, 2, 1], [2, 2])).toStrictEqual([2]);
});

test("[4,9,5] and [9,4,9,8,4] should return [9, 4]", () => {
  expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toStrictEqual([9, 4]);
});

test("[] and [9,4,8] should return []", () => {
  expect(intersection([], [9, 4, 8])).toStrictEqual([]);
});
test("[9,4,8] and [] should return []", () => {
  expect(intersection([9, 4, 8], [])).toStrictEqual([]);
});
