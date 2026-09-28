/**
 * Problem: Right Triangle Star Pattern
 * Topic: Patterns (Nested Loops)
 *
 * Description:
 * Given a number n, print a right-angled triangle of stars
 * where row i contains i+1 stars.
 *
 * Example:
 * Input: n = 4
 * Output:
 * *
 * **
 * ***
 * ****
 *
 * Approach:
 * Use two loops.
 * The outer loop runs n times, once for each row (i = 0 to n - 1).
 * For every row, start with an empty string.
 * The inner loop runs i + 1 times, adding one "*" each time.
 * After the inner loop finishes, print the string.
 *
 */

function printRightTriangleStar(n) {
  for (let i = 0; i< n; i++) {
    let row = "";
    for(let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}  

// ---------- Test Cases ----------
printRightTriangleStar(3); 
// Output:
// *
// **
// ***

printRightTriangleStar(5);
// Output:
// *
// **
// ***
// ****
// *****