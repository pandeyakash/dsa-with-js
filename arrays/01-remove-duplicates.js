/**
 * Problem: Remove Duplicates from Sorted Array
 * LeetCode: #26
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 * Difficulty: Easy
 * Topic: Arrays (Two Pointers)
 *
 *
 * Time Complexity: O(n)
 *   The array is traversed once.
 * Space Complexity: O(1)
 *   The array is modified in-place; no extra array is used.
 */

function removeDuplicates(nums) {
  let x = 0;
   for(let i = 0; i < nums.length; i++) {
    if(nums[i] > nums[x]) {
      x++;
      nums[x] = nums[i];
    }
   }
   return x + 1;
}

// -------Test Cases-------
console.log(removeDuplicates([1, 1, 2])); // Output: 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5 
console.log(removeDuplicates([1, 2, 3, 4, 5])); // Output: 5
console.log(removeDuplicates([1, 1, 1, 1, 1])); // Output: 1
console.log(removeDuplicates([])); // Output: 0
