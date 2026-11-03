/*
 * LeetCode 509: Fibonacci Number (Easy)
 *
 * PROBLEM:
 *   The Fibonacci sequence starts with 0 and 1, and every number after
 *   that is the sum of the two numbers before it:
 *
 *       F(0) = 0
 *       F(1) = 1
 *       F(n) = F(n - 1) + F(n - 2),  for n > 1
 *
 *   Given an integer n, return F(n).
 *   (Solve it using recursion.)
 *
 * Example 1:
 *   Input:  n = 2
 *   Output: 1
 *   Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1
 *
 * Example 2:
 *   Input:  n = 3
 *   Output: 2
 *   Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2
 *
 * Example 3:
 *   Input:  n = 4
 *   Output: 3
 *   Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3
 *
 * Constraints:
 *   0 <= n <= 30
 *
 * Complexity (plain recursion):
 *   Time:  O(2^n)  - each call makes two more calls (fib(n-1) and fib(n-2)),
 *                    so the number of calls roughly doubles with every step.
 *   Space: O(n)    - maximum depth of the recursion call stack.
 */

// ---------- WRITE YOUR CODE HERE ----------
function fib(num) {
    if(num <= 1) return num;
    return fib(num - 1) + fib(num - 2)
}
// ------------------------------------------


// ---------- TEST CASES ----------
console.log(fib(0));   // Expected: 0
console.log(fib(1));   // Expected: 1
console.log(fib(2));   // Expected: 1
console.log(fib(4));   // Expected: 3
console.log(fib(10));  // Expected: 55
console.log(fib(30));  // Expected: 832040