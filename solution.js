const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumEven(arr) {
  return arr
    .filter((value) => value % 2 == 0) // creates new array containing only the even numbers
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sums all the numbers in the array created by .filter
}

console.log(sumEven(nums)); // expect 30
