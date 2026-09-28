/**
 * Problem: Continuous Binary Triangle Pattern
 * Topic: Patterns (Nested Loops)
 *
 * Description:
 * Given a number n, print a right-angled triangle of 1s and 0s
 * where row i has (i + 1) digits, and the digits alternate
 * continuously across all rows, starting with 1.
 *
 * Example:
 * Input: n = 5
 * Output:
 * 1
 * 01
 * 010
 * 1010
 * 10101
 *
 * Approach:
 * Keep a variable (toggle) outside both loops, starting at 1.
 * The outer loop runs n times, once for each row (i = 0 to n - 1).
 * For every row, start with an empty string.
 * The inner loop runs from j = 0 to j <= i.
 * In each iteration, add toggle to the string, then flip it
 * (1 becomes 0, 0 becomes 1).
 * After the inner loop finishes, print the string.
 * Since toggle is declared outside the loops, its value carries
 * over into the next row.
 *
 */

function printStar(n) {
  let toggle = 1

  for(let i =0; i< n; i++) {
    let row = ""
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