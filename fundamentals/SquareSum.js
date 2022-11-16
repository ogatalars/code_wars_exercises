// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// my solution

function squareSum(numbers) {
  let exp = [];

  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    exp = parseInt(numbers[i] ** 2);
    total += exp;
  }

  return total;
}
squareSum([1, 2, 2]);
squareSum([2, 3, 5]);

// another solution

function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}
