let numbers = [1, 2, 2];
function squareSum(numbers){
  let sum = 0;
  for(var i = 0; i < numbers.length; i++){
    sum += numbers[i]**2;
  }
  return (sum)
}
//переменная numbers содержит некоторые массив. циклом for перебрал элементы массива, , в переменную sum добавлял числа, возведенные в степень, в итоге получил нужное в задании число.