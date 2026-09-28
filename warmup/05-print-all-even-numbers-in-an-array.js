/**
 * Problem: Print all even numbers in an array
 * Topic: Arrays
 *
 * Description:
 * Given an array of numbers, print all the even numbers.
 *
 * Example:
 * Input: [1, 2, 3, 4, 5, 6]  → Output: 2, 4, 6
 * Input: [7, 8, 9, 10]       → Output: 8, 10
 *
 * Approach:
 * Iterate through the array and check each number using the modulo operator (%).
 *
 */

function printEvenNumbers(arr) {
  for(let i = 0; i<arr.length; i++) {
    if(arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

// ---------- Test Cases ----------
printEvenNumbers([1, 2, 3, 4, 5, 6]); // 2, 4, 6
printEvenNumbers([7, 8, 9, 10]);      // 8, 10