/**
 * Problem: Right Triangle Number Pattern with repeated numbers
 * Topic: Patterns (Nested Loops)
 *
 * Description:
 * Given a number n, print a right-angled triangle where
 * each row i contains the number (i + 1) repeated (i + 1) times.
 *
 * Example:
 * Input: n = 5
 * Output:
 * 1
 * 22
 * 333
 * 4444
 * 55555
 *
 * Approach:
 * Use two loops.
 * The outer loop runs n times, once for each row (i = 0 to n - 1).
 * For every row, start with an empty string.
 * The inner loop runs from j = 0 to j <= i, and adds (i + 1)
 * to the string each time.
 * After the inner loop finishes, print the string.
 *
 */

function printStars(n) {
  for(let i = 0 ; i < n; i++) {
    let row = "";
    for(let j =0; j<= i; j++) {
      row += i+1;
    }
    console.log(row);
  }
}

// ---------- Test Cases ----------
printStars(3); 
// Output:
// 1
// 22
// 333

printStars(5);
// Output:
// 1
// 22
// 333
// 4444
// 55555