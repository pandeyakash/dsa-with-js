/*
 * PROBLEM: Binary Search (LeetCode 704)
 *
 * Given an array of integers sorted in ascending order and a target value,
 * write a function that returns the index of the target.
 * If the target is not present, return -1.
 * Your solution must run in O(log n) time, so a plain linear scan
 * is not allowed.
 *
 * Constraints:
 *   0 <= arr.length <= 10^4
 *   All elements are unique and sorted in ascending order.
 *
 * Example 1:
 *   Input:  arr = [-1, 0, 3, 5, 9, 12], target = 9
 *   Output: 4
 *
 * Example 2:
 *   Input:  arr = [-1, 0, 3, 5, 9, 12], target = 2
 *   Output: -1
 *
 * Complexity:
 *   Time:  O(log n)  - the search range is halved at every step.
 *   Space: O(1)      - iterative version (recursive uses O(log n)).
 */

// ---------- WRITE YOUR CODE HERE ----------
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
      let mid = Math.floor((left + right) / 2);

      if(target === arr[mid]) return mid;
      else if(target < arr[mid]) right = mid - 1;
      else if(target > arr[mid]) left = mid + 1;
  }

  return -1
}
// ------------------------------------------


// ---------- TEST CASES ----------
console.log(binarySearch([], 5));                        // Expected: -1
console.log(binarySearch([5], 5));                       // Expected: 0
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));      // Expected: 4
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2));      // Expected: -1
console.log(binarySearch([-1, 0, 3, 5, 9, 12], -1));     // Expected: 0
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 12));     // Expected: 5