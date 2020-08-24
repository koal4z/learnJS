exports.intersection = (arr1, arr2) => {
  
  const set = new Set(arr1)
  const fileredSet = new Set(arr2.filter(n => set.has(n)))
  return [...fileredSet]
}
