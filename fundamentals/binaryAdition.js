// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
  let result = a + b;
  let binary = (result >>> 0).toString(2);
  console.log(`${a} + ${b} = ${result} in decimal or ${binary} in binary `);
}
addBinary(1, 19);

// function addBinary(a, b) {
//     const sum = a + b;
//     return sum.toString(2);
//   }
