function countPositivesSumNegatives(input) {
    let sum = [];
    
    let positiveSum = input.filter(elem => elem > 0);
    let negativeSum = input.filter(elem => elem < 0);
    let positiveArr = positiveSum.length;
    let negativeArr = negativeSum.reduce((a, b) => a + b);
    sum.push(positiveArr);
    sum.push(negativeArr);
    return sum;
}