/**
 * Problem: Remove Element
 * LeetCode: #27
 * Link: https://leetcode.com/problems/remove-element/
 * Difficulty: Easy
 * Topic: Arrays (Two Pointers)
 *
 *
 *
 * Time Complexity: O(n)
 *   The array is traversed once.
 * Space Complexity: O(1)
 *   The array is modified in-place; no extra array is used.
 */


function removeElement(nums, val) {
  let x = 0;

  for(let i = 0; i< nums.length; i++) {
    if(nums[i] !== val) {
      nums[x] = nums[i];
      x++;
    }
  }
  return x;
}


// -------Test Cases-------
console.log(removeElement([3, 2, 2, 3], 3)); // Output: 2
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // Output: 5
console.log(removeElement([1], 1)); // Output: 0
console.log(removeElement([1,2,3], 4)); // Output: 3
console.log(removeElement([], 1)); // Output: 0
console.log(removeElement([1,1,1,1], 1)); // Output: 0
