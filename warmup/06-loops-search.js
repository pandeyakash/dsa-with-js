/**
 * Problem: Linear Search
 * Topic: Loops
 *
 * Description:
 * Write a function that searches for an element in an array
 * and returns its index. If the element is not present,
 * return -1.
 *
 * Example:
 * Input: arr = [4, 2, 7, 1, 9], target = 7  → Output: 2
 * Input: arr = [4, 2, 7, 1, 9], target = 5  → Output: -1
 *
 * Approach:
 * Loop through the array from index 0 to the end.
 * At each index, compare the current element with the target.
 * If they match, return the current index immediately.
 * If the loop finishes without finding a match, return -1.
 *
 */

function search(arr, target) {
  for(let i =0; i< arr.length; i++) {
    if(arr[i] === target) {
      return i
    }
  }
  return -1;
}

// ---------- Test Cases ----------
console.log(search([4, 2, 7, 1, 9], 7)); // Output: 2
console.log(search([4, 2, 7, 1, 9], 5)); // Output: -1