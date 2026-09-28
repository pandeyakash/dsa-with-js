/**
 * Problem: Binary Triangle Pattern
 * Topic: Patterns (Nested Loops)
 *
 * Description:
 * Given a number n, print a right-angled triangle where
 * row i has (i + 1) digits, alternating between 1 and 0,
 * and every row starts with 1.
 *
 * Example:
 * Input: n = 5
 * Output:
 * 1
 * 10
 * 101
 * 1010
 * 10101
 *
 * Approach:
 * Use two loops.
 * The outer loop runs n times, once for each row (i = 0 to n - 1).
 * For every row, start with an empty string and a toggle variable.
 * The inner loop runs from j = 0 to j <= i.
 * Toggle between 1 and 0, use a variable that starts at 1 and flips its value after each addition to the string.
 *
 */

function printStar(n) {
  for(let i =0; i< n; i++) {
    let row = ""
    let toggle = 1
    for(let j = 0; j <= i; j++) {
      row += toggle

      if(toggle === 1) {
        toggle = 0
      } else {
        toggle = 1
      }
    }
    console.log(row)
  }
}

// ---------- Test Cases ----------
printStar(3); 
// Output:
// 1
// 10
// 101

printStar(5);
// Output:
// 1
// 10
// 101
// 1010
// 10101