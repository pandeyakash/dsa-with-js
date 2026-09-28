/**
 * Problem: Right-Aligned Triangle Star Pattern
 * Topic: Patterns (Nested Loops)
 *
 * Description:
 * Given a number n, print a right-aligned triangle of stars
 * where row i has (n - i - 1) spaces followed by (i + 1) stars.
 *
 * Example:
 * Input: n = 5
 * Output:
 *     *
 *    **
 *   ***
 *  ****
 * *****
 *
 * Approach:
 * Use one outer loop and two inner loops.
 * The outer loop runs n times, once for each row (i = 0 to n - 1).
 * For every row, start with an empty string.
 * The first inner loop adds (n - i - 1) spaces.
 * The second inner loop adds (i + 1) stars.
 * After both inner loops finish, print the string.
 *
 */

function printStart(n) {
  for(let i =0; i< n; i++) {
    let row = "";
    for(let j = 0; j< n -(i+1); j++) {
      row += " ";
    }
    for(let k = 0; k <= i; k++) {
      row += "*";
    }
    console.log(row);
  }
}

// ---------- Test Cases ----------
printStart(3); 
// Output:
//   *
//  **
// ***

printStart(5);
// Output:
//     *
//    **
//   ***
//  ****
// *****