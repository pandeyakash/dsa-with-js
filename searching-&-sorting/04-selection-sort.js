/*
 * PROBLEM: Selection Sort
 *
 * Given an array of integers, sort it in ascending order using the
 * selection sort algorithm and return the sorted array.
 * Selection sort repeatedly finds the smallest element in the unsorted
 * part of the array and swaps it into the next position of the sorted part.
 * Built-in sort() is not allowed.
 *
 * Constraints:
 *   0 <= arr.length <= 1000
 *   Elements may be negative or repeated.
 *
 * Example 1:
 *   Input:  arr = [64, 25, 12, 22, 11]
 *   Output: [11, 12, 22, 25, 64]
 *
 * Example 2:
 *   Input:  arr = [3, -1, 3, 0]
 *   Output: [-1, 0, 3, 3]
 *
 * Complexity:
 *   Time:  O(n^2)  in the best, average and worst case, because the
 *                  minimum is searched for in every pass even if the
 *                  array is already sorted.
 *   Space: O(1)    - sorting is done in place.
 *          It makes at most n - 1 swaps.
 */

// ---------- WRITE YOUR CODE HERE ----------
function selectionSort(arr) {
  let n = arr.length
  for(let i = 0; i < n - 1; i++) {
      let min = i
      for(let j = i + 1; j < n; j++) {
          if(arr[j] < arr[min]) {
              min = j
          }
      }
      if(i !== min) {
          let temp = arr[i]
          arr[i] = arr[min]
          arr[min] = temp
      }
  }
  return arr
}
// ------------------------------------------


// ---------- TEST CASES ----------
console.log(selectionSort([]));                    // Expected: []
console.log(selectionSort([7]));                   // Expected: [ 7 ]
console.log(selectionSort([64, 25, 12, 22, 11]));  // Expected: [ 11, 12, 22, 25, 64 ]
console.log(selectionSort([3, -1, 3, 0]));         // Expected: [ -1, 0, 3, 3 ]
console.log(selectionSort([1, 2, 3, 4, 5]));       // Expected: [ 1, 2, 3, 4, 5 ]
console.log(selectionSort([9, 8, 7, 6, 5]));       // Expected: [ 5, 6, 7, 8, 9 ]