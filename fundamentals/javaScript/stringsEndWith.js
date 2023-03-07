// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// function solution(str, ending) {
//   // TODO: complete
//   if (str.slice(-1) == ending.slice(-1)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// solution("abc", "bc");
// let nome = "abc";

// solution 3
function solution(str, ending) {
  return str.endsWith(ending);
}
