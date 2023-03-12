function countPositivesSumNegatives(input) {
    let sum = [];
    
    let positiveSum = input.filter(elem => elem > 0);
    let negativeSum = input.filter(elem => elem < 0);
    let positiveArr = positiveSum.reduce((a, b) => a + b);
    let negativeArr = negativeSum.reduce((a, b) => a + b);
    sum.push(positiveArr);
    sum.push(negativeArr);
    return sum
}
    
  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))