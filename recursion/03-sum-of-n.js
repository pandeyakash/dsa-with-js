/*
 * PROBLEM: Sum of First N Numbers Using Recursion
 *
 * Given a positive integer N, write a recursive function that returns
 * the sum of the first N natural numbers (1 + 2 + ... + N).
 * Loops are not allowed.
 *
 * Constraints: 1 <= N <= 1000
 *
 * Example 1:  Input: 5   Output: 15
 * Example 2:  Input: 1   Output: 1
 */

// ---------- WRITE YOUR CODE HERE ----------
function sumOfN(n) {
  if(n === 1) return 1;
  return n + sumOfN(n - 1);
}
// ------------------------------------------


// ---------- TEST CASES ----------
console.log(sumOfN(1));    // Expected: 1
console.log(sumOfN(5));    // Expected: 15
console.log(sumOfN(10));   // Expected: 55
console.log(sumOfN(100));  // Expected: 5050