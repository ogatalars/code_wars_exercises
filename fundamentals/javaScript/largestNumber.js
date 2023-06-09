// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  let largest = [];
  for (let i = 0; i < arr.length; i++) {
    largest.push(Math.max.apply(null, arr[i]));
  }
  return largest;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [-1000, -1001, -857, -1],
  ])
);

// another way
function largestOfFour2(arr) {
  let largest = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNum = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }
    largest.push(largestNum);
  }
  return largest;
}
// another way using map

function largestOfFour3(arr) {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev;
    });
  });
}
