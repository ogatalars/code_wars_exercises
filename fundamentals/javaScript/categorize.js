// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// function openOrSenior(data) {
//   // ...
//   for (let i = 0; i < data.length; i++) {
//     for (let z = 0; z < data[z].length; z++) {
//       if (data[0] >= 56 && data[1] >= 7) {
//         return "Senior";
//       } else return "Open";
//     }
//   }
// }

function openOrSenior(data) {
  // Senior = 55+ and 7+
  let result = [];

  for (let i = 0; i < data.length; i++) {
    result[i] = data[i][0] >= 55 && data[i][1] > 7 ? "Senior" : "Open";
  }

  return result;
}
// Another way

function openOrSenior2(data) {
  function determineMembership(member) {
    return member[0] >= 55 && member[1] > 7 ? "Senior" : "Open";
  }
  return data.map(determineMembership);
}

console.log(openOrSenior([18, 20], [60, 6]));
