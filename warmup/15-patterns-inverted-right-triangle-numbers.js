/**
 * Problem: Inverted Right Triangle Number Pattern
 * Topic: Patterns (Nested Loops)
 *
 * Description:
 * Given a number n, print an inverted right-angled triangle
 * where the first row has numbers from 1 to n, and each
 * following row has one number less.
 *
 * Example:
 * Input: n = 5
 * Output:
 * 12345
 * 1234
 * 123
 * 12
 * 1
 *
 * Approach:
 * Use two loops.
 * The outer loop runs n times, once for each row (i = 0 to n - 1).
 * For every row, start with an empty string.
 * The inner loop runs from j = 0 to j < n - i, and adds (j + 1)
 * to the string each time.
 * After the inner loop finishes, print the string.
 *
 */

function printStar(n) {
  for(let i = 0; i< n; i++) {
    let row = "";
    for(let j = 0; j < n-i; j++) {
      row += j+1;
    }
    console.log(row);
  }
}

//--------- Alternate approach ---------
// function printStar(n) {
//   for(let i = n; i>0; i--) {
//     let row = "";
//     for(let j = 0; j < i; j++) {
//       row += j+1;
//     }
//     console.log(row);
//   }
// }

// ---------- Test Cases ----------
printStar(3); 
// Output:
// 123
// 12
// 1

printStar(5);
// Output:
// 12345
// 1234
// 123
// 12
// 1