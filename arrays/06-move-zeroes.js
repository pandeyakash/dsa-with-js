/**
 * Problem: Move Zeroes
 * LeetCode: #283
 * Link: https://leetcode.com/problems/move-zeroes/
 * Difficulty: Easy
 * Topic: Arrays (Two Pointers)
 *
 * 
 *
 * Time Complexity: O(n)
 *   The array is traversed once.
 * Space Complexity: O(1)
 *   Only two pointers are used; no extra array.
 */

// Approach 1
// function moveZeroes(nums) {
//     let p = 0;

//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] !== 0) {
//             let temp = nums[p];
//             nums[p] = nums[i];
//             nums[i] = temp
//             p++;
//         }
//     }

//     return nums
// }

// Approach 2
function moveZeroes(nums) {
    let p = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[p] = nums[i];
            p++;
        }
    }

    for(let i = p; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums
}


// -------Test Cases-------
console.log(moveZeroes([0,1,0,3,12])); // Output: [1,3,12,0,0]
console.log(moveZeroes([0])); // Output: [0]
console.log(moveZeroes([1,2,3])); // Output: [1,2,3]
console.log(moveZeroes([0,0,1])); // Output: [1,0,0]
console.log(moveZeroes([4,2,4,0,0,3,0,5,1,0])); // Output: [4,2,4,3,5,1,0,0,0,0]