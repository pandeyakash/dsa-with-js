/**
 * Problem: Count Negative Numbers
 * Topic: Loops
 *
 * Description:
 * Write a function that takes an array of integers and
 * returns the count of negative numbers in it.
 *
 * Example:
 * Input: arr = [2, -5, 0, -1, 8, -3]  → Output: 3
 * Input: arr = [1, 2, 3]              → Output: 0
 *
 * Approach:
 * Initialize a counter variable to 0.
 * Loop through each element of the array.
 * If the current element is less than 0, increase the counter by 1.
 * After the loop ends, return the counter.
 *
 */

function countNegativeNumbers(arr) {
  let negativeCount = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      negativeCount++;
    }
  }
  return negativeCount; 
}

// ---------- Test Cases ----------
console.log(countNegativeNumbers([2, -5, 0, -1, 8, -3])); // Output: 3
console.log(countNegativeNumbers([1, 2, 3]));              // Output: 0