/**
 * Problem: Even or Odd
 * Topic: If-Else
 *
 * Description:
 * Given a number, check whether it is even or odd.
 *
 * Example:
 * Input: 5  → Output: "Odd"
 * Input: 4  → Output: "Even"
 *
 * Approach:
 * Use the modulo operator (%) to check if the number is divisible by 2.
 *
 */

function checkEvenOrOdd(n) {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// ---------- Test Cases ----------
console.log(checkEvenOrOdd(5)); // Odd
console.log(checkEvenOrOdd(4)); // Even