/**
 * Problem: Square Star Pattern
 * Topic: Patterns (Nested Loops)
 *
 * Description:
 * Given a number n, print a square pattern of stars
 * with n rows and n columns.
 *
 * Example:
 * Input: n = 4
 * Output:
 * ****
 * ****
 * ****
 * ****
 *
 * Approach:
 * Use two loops.
 * The outer loop runs n times, once for each row.
 * For every row, start with an empty string.
 * The inner loop runs n times and adds one "*" to the string each time.
 * After the inner loop finishes, print the string and move to the next row.
 *
 */

const printStarSquare = (n) => {
  for(let i = 0; i< n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// ---------- Test Cases ----------
printStarSquare(3); 
// Output:
// ***
// ***
// ***

printStarSquare(5);
// Output:
// *****
// *****
// *****
// *****
// *****
