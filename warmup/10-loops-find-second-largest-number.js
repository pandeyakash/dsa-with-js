/**
 * Problem: Find Second Largest Number
 * Topic: Loops
 *
 * Description:
 * Write a function that takes an array of numbers and
 * returns the second largest distinct number in it.
 * If all numbers are the same, return No second largest found.
 *
 * Example:
 * Input: arr = [4, 9, 1, 7, 3]  → Output: 7
 * Input: arr = [10, 10, 5]      → Output: 5
 * Input: arr = [8, 8, 8]        → Output: No second largest found
 *
 * Approach:
 * Keep two variables: largest and secondLargest, both starting at -Infinity.
 * Loop through the array once. For each element:
 *   - If it is greater than largest, move largest into secondLargest,
 *     then update largest to the current element.
 *   - Else if it is greater than secondLargest AND not equal to largest,
 *     update secondLargest.
 * After the loop, if secondLargest is still -Infinity, return "No second largest found".
 * Otherwise, return secondLargest.
 *
 */

function findSecondLargestNumber(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if(arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity ? "No second largest found" : secondLargest;
}

// ---------- Test Cases ----------
console.log(findSecondLargestNumber([3, 5, 1, 8, 2])); // Output: 5
console.log(findSecondLargestNumber([-10, -5, -1, -20])); // Output: -5
console.log(findSecondLargestNumber([8, 8, 8])); // Output: No second largest found