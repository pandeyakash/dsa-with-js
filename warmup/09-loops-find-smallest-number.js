/**
 * Problem: Find Smallest Number
 * Topic: Loops
 *
 * Description:
 * Write a function that takes an array of numbers and
 * returns the smallest number in it.
 *
 * Example:
 * Input: arr = [3, 8, 1, 12, 5]  → Output: 1
 * Input: arr = [-7, -2, -9]      → Output: -9
 *
 * Approach:
 * Assume the Infinity is the smallest and store it in a variable.
 * Loop through the  array starting from index 0.
 * If the current element is less than the stored smallest,
 * update the smallest.
 * After the loop ends, return the smallest.
 *
 */

function findSmallest(arr) {
  let smallestNumber = Infinity;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
}

// ---------- Test Cases ----------
console.log(findSmallest([3, 5, 1, 8, 2])); // Output: 1
console.log(findSmallest([-10, -5, -1, -20])); // Output: -20