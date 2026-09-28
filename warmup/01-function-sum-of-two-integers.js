/**
 * Problem: Sum of Two Integers
 * Topic: Functions
 *
 * Description:
 * Write a function that takes two integers as input
 * and returns their sum.
 *
 * Example:
 * Input: a = 5, b = 3    → Output: 8
 * Input: a = -4, b = 10  → Output: 6
 *
 * Approach:
 * Accept two parameters and return their sum using the + operator.
 *
 */

function sum(a, b) {
  return a + b;
}

// ---------- Test Cases ----------
console.log(sum(5, 3));    // Output: 8
console.log(sum(-4, 10));  // Output: 6