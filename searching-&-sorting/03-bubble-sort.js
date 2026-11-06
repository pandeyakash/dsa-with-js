/*
 * PROBLEM: Bubble Sort
 *
 * Given an array of integers, sort it in ascending order using the
 * bubble sort algorithm and return the sorted array.
 * Bubble sort repeatedly compares adjacent elements and swaps them if
 * they are in the wrong order, so the largest values "bubble" to the end.
 * Built-in sort() is not allowed.
 *
 * Constraints:
 *   0 <= arr.length <= 1000
 *   Elements may be negative or repeated.
 *
 * Example 1:
 *   Input:  arr = [5, 1, 4, 2, 8]
 *   Output: [1, 2, 4, 5, 8]
 *
 * Example 2:
 *   Input:  arr = [3, -1, 3, 0]
 *   Output: [-1, 0, 3, 3]
 *
 * Complexity:
 *   Time:  O(n^2)  worst and average case.
 *   Space: O(1)    - sorting is done in place.
 */

// ---------- WRITE YOUR CODE HERE ----------
function bubbleSort(arr) {
  let n = arr.length;

  for(let i = 0; i < n - 1; i++) {
      let isSwapped = false
      for(let j = 0; j < n - i - 1; j++) {
          if(arr[j + 1] < arr[j]) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp
              isSwapped = true
          }
      }
      if(!isSwapped) break;
  }

  return arr;
}
// ------------------------------------------


// ---------- TEST CASES ----------
console.log(bubbleSort([]));                  // Expected: []
console.log(bubbleSort([7]));                 // Expected: [ 7 ]
console.log(bubbleSort([5, 1, 4, 2, 8]));     // Expected: [ 1, 2, 4, 5, 8 ]
console.log(bubbleSort([3, -1, 3, 0]));       // Expected: [ -1, 0, 3, 3 ]
console.log(bubbleSort([1, 2, 3, 4, 5]));     // Expected: [ 1, 2, 3, 4, 5 ]
console.log(bubbleSort([9, 8, 7, 6, 5]));     // Expected: [ 5, 6, 7, 8, 9 ]