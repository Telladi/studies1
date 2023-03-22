function filter_list(l) {
  let result = l.filter(function(element){ 
    return typeof element == "number"})
  return result
}