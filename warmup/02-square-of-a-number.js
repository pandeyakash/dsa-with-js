/**
 * Problem: Square of a Number
 * Topic: Functions
 *
 * Description:
 * Write a function that takes a number as input
 * and returns its square.
 *
 * Example:
 * Input: 5  → Output: 25
 * Input: -4  → Output: 16
 *
 * Approach:
 * Accept one parameter and return its square using the ** operator.
 *
 */

function square(n) {
  return n ** 2;
}

// ---------- Test Cases ----------
console.log(square(5));    // Output: 25
console.log(square(-4));  // Output: 16