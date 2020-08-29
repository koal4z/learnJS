// leetCode
exports.thirdMax = function (nums) {
  let max = 0
  let min = Math.min(...nums)
  let length = nums.length

  let count = 0
  let i = 0
  let set = new Set(nums)
  while (i < length) {
    if (max < nums[i]) {
      max = nums[i]
    }
    i++
  }

  if (length < 3 || set.size < 3) {
    return max
  }

  i = 0
  while (count < 2) {
    if (nums[i] < max && nums[i] > min) {
      min = nums[i]
    }
    if (i === length - 1) {
      i = 0
      max = min
      count++
      min = Math.min(...nums)
    }
    i++
  }

  return max
}
