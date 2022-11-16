// // Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
// The string can contain any char.
function XO(str) {
  //code here
  let X = 0;
  let O = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "x" || str[i] == "X") {
      X += 1;
    } else if (str[i] == "o" || str[i] == "O") {
      O += 1;
    }
  }
  if (X == O) {
    return true;
  } else {
    return false;
  }
}

console.log(XO("XOXO"));
console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("Oo"));
console.log(XO("ooom"));
console.log(XO("xxxm"));
