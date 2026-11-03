/*
 * PROBLEM: Sum of All Elements in an Array Using Recursion
 *
 * Given an array of integers, write a recursive function that returns
 * the sum of all its elements. Loops and built-in methods like reduce()
 * are not allowed. An empty array has a sum of 0.
 *
 * Constraints: 0 <= arr.length <= 1000
 *
 * Example 1:  Input: [1, 2, 3, 4, 5]   Output: 15
 * Example 2:  Input: [10]              Output: 10
 */

// ---------- WRITE YOUR CODE HERE ----------
function sumOfArray(arr) {
  function sum(num) {
      if(num === 0) return arr[0]
      return arr[num] + sum(num - 1)
  }
  if(arr.length === 0) return 0;
  return sum(arr.length - 1);
}
// ------------------------------------------


// ---------- TEST CASES ----------
console.log(sumOfArray([]));                 // Expected: 0
console.log(sumOfArray([10]));               // Expected: 10
console.log(sumOfArray([1, 2, 3, 4, 5]));    // Expected: 15
console.log(sumOfArray([-2, 4, -6, 8]));     // Expected: 4