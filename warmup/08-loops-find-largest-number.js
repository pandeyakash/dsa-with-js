/**
 * Problem: Find Largest Number
 * Topic: Loops
 *
 * Description:
 * Write a function that takes an array of numbers and
 * returns the largest number in it.
 *
 * Example:
 * Input: arr = [3, 8, 1, 12, 5]  → Output: 12
 * Input: arr = [-7, -2, -9]      → Output: -2
 *
 * Approach:
 * Assume the -Infinity is the largest and store it in a variable.
 * Loop through the  array starting from index 0.
 * If the current element is greater than the stored largest,
 * update the largest.
 * After the loop ends, return the largest.
 *
 */

function findLargest(arr) {
  let largestNumber = -Infinity;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

// ---------- Test Cases ----------
console.log(findLargest([3, 5, 1, 8, 2])); // Output: 8
console.log(findLargest([-10, -5, -1, -20])); // Output: -1