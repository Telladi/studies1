let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
let resultArr= function() {
  let positiveArr = input.filter(function(number) {
    return number > 0;
  });
    let positiveNumber = 0;
    for (let elem of positiveArr) {
      positiveNumber += elem;
    }
  
  let negativeArr = input.filter(function(number) {
    return number < 0;
  })
  let negativeNumber = 0;
  for (let elem of negativeArr) {
    negativeNumber += elem;
  }
  let resArr = [];
  resArr.push(positiveNumber);
  resArr.push(negativeNumber);
  return resArr;
  }
  console.log(resultArr(input))
