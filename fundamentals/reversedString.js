// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// first solution found on 'sololearn'
function solution(str) {
  return str === "" ? "" : solution(str.substr(1)) + str.charAt(0);
}
//my solution

// function solution(str) {
//   return str.split("").reverse().join('');
// }
