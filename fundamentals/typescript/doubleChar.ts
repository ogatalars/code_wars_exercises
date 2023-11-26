// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str: string): string {
    let result = "";
    for (let char of str) {
      result += char + char;
    }
    return result;
  }
  
  // Examples
  console.log(doubleChar("String"));      // Output: "SSttrriinngg"
  console.log(doubleChar("Hello World")); // Output: "HHeelllloo  WWoorrlldd"
  console.log(doubleChar("1234!_ "));     // Output: "11223344!!__  "
  