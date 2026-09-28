/**
 * Problem: Inverted Right Triangle Star Pattern
 * Topic: Patterns (Nested Loops)
 *
 * Description:
 * Given a number n, print an inverted right-angled triangle
 * of stars where the first row has n stars and each
 * following row has one star less.
 *
 * Example:
 * Input: n = 5
 * Output:
 * *****
 * ****
 * ***
 * **
 * *
 *
 * Approach:
 * Use two loops.
 * The outer loop runs n times, once for each row (i = 0 to n - 1).
 * For every row, start with an empty string.
 * The inner loop runs from j = 0 to j < n - i, adding one "*" each time.
 * After the inner loop finishes, print the string.
 *
 */

function printStar(n) {
  for(let i = 0; i< n; i++) {
    let row = "";
    for(let j =0; j<n-i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

//---------- Test Cases ----------
printStar(3); 
// Output:
// ***
// **
// *

printStar(5);
// Output:
// *****
// ****
// ***
// **
// *