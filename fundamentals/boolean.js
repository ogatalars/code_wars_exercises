// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord(bool) {
  //...
  if (bool === true) {
    return "True";
  } else if (bool === false) {
    return "No";
  }
}

// another ways.

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
