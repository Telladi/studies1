function arrayPlusArray(arr1, arr2) {
  let c = arr1.concat(arr2);
  return c.reduce(function(a, b) {
  return a + b
    });//something went wrong
}