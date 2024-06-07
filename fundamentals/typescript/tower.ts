// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

export const towerBuilder = (nFloors: number): string[] => {
    // build here
    const tower = [];
    for(let i = 0; i < nFloors; i++){
      const space = ' '.repeat(nFloors - i - 1);
      const star = '*'.repeat(i * 2 + 1);
      tower.push(space + star + space);
    }
    return tower;
  }