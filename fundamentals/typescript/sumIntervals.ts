// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1, 4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals( [
//    [1, 2],
//    [6, 10],
//    [11, 15]
// ] ) => 9

function sumOfIntervals(intervals: [number, number][]): number {
  
    intervals.sort((a, b) => a[0] - b[0]);
  
    let totalLength = 0;
    let currentInterval = intervals[0];
  
  
    for (let i = 1; i < intervals.length; i++) {
      const nextInterval = intervals[i];
  

      if (nextInterval[0] <= currentInterval[1]) {
    
        currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
      } else {
        
        totalLength += currentInterval[1] - currentInterval[0];
      
        currentInterval = nextInterval;
      }
    }
  
   
    totalLength += currentInterval[1] - currentInterval[0];
  
    return totalLength;
  }
  

  const overlappingIntervals: [number, number][] = [
    [1, 4],
    [7, 10],
    [3, 5]
  ];
  
  const sum = sumOfIntervals(overlappingIntervals);
  console.log(sum); // Output: 7
  