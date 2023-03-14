let numbers = [10, 343445353, 3453445, 3453545353453]
function sumTwoSmallestNumbers(numbers) {  
    numbers.sort(function(a, b){
      return a - b;
    });
    return numbers[0] + numbers[1]
  }
console.log(sumTwoSmallestNumbers(numbers))