/*
 * PROBLEM: Factorial of a Number Using Recursion
 *
 * Given a non-negative integer N, write a recursive function that returns
 * the factorial of N (N! = N * (N-1) * ... * 1). By definition, 0! = 1.
 * Loops are not allowed.
 *
 * Constraints: 0 <= N <= 12
 *
 * Example 1:  Input: 5   Output: 120
 * Example 2:  Input: 0   Output: 1
 */

// ---------- WRITE YOUR CODE HERE ----------
function factorial(num) {
    if(num <= 1) return 1;
    return num * factorial(num - 1)
}
// ------------------------------------------


// ---------- TEST CASES ----------
console.log(factorial(0));   // Expected: 1
console.log(factorial(1));   // Expected: 1
console.log(factorial(5));   // Expected: 120
console.log(factorial(10));  // Expected: 3628800