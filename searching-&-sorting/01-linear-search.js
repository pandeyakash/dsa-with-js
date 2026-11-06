/*
 * PROBLEM: Linear Search
 *
 * Given an array of integers and a target value, write a function that
 * returns the index of the first occurrence of the target.
 * If the target is not present, return -1. Use a loop; built-in methods
 * like indexOf() or includes() are not allowed.
 *
 * Constraints:
 *   0 <= arr.length <= 1000
 *
 * Example 1:
 *   Input:  arr = [4, 2, 7, 1, 9], target = 7
 *   Output: 2
 *
 * Example 2:
 *   Input:  arr = [4, 2, 7, 1, 9], target = 5
 *   Output: -1
 *
 * Complexity:
 *   Time:  O(n)  - in the worst case every element is checked once.
 *   Space: O(1)  - no extra memory is used.
 */

// ---------- WRITE YOUR CODE HERE ----------
function linearSearch(arr, target) {
  if(arr.length <= 0) return -1

  for(let i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
          return i
      }
  }

  return -1
}
// ------------------------------------------


// ---------- TEST CASES ----------
console.log(linearSearch([], 3));                // Expected: -1
console.log(linearSearch([5], 5));               // Expected: 0
console.log(linearSearch([4, 2, 7, 1, 9], 7));   // Expected: 2
console.log(linearSearch([4, 2, 7, 1, 9], 5));   // Expected: -1
console.log(linearSearch([3, 8, 3, 6], 3));      // Expected: 0 (first occurrence)