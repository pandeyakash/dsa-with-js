/**
 * Problem: Max Consecutive Ones
 * LeetCode: #485
 * Link: https://leetcode.com/problems/max-consecutive-ones/
 * Difficulty: Easy
 * Topic: Arrays (Single Pass / Counting)
 *
 * 
 *
 * Time Complexity: O(n)
 *   The array is traversed once.
 * Space Complexity: O(1)
 *   Only two extra variables are used.
 */


//Approach 1

// function findMaximumConsecutiveOnes(nums) {
//     let maxCount = 0;
//     let count = 0;

//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === 1) {
//             count++
//         }
//         if(nums[i] === 0 || i === nums.length - 1) {
//             maxCount = Math.max(maxCount, count);
//             count = 0
//         }
//     }

//     return maxCount
// }

//Approach 2

function findMaximumConsecutiveOnes(nums) {
    let maxCount = 0;
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            count++
        } else {
            maxCount = Math.max(maxCount, count);
            count = 0
        }
    }

    return Math.max(maxCount, count)
}

// -------Test Cases-------
console.log(findMaximumConsecutiveOnes([1,1,0,1,1,1])); // Output: 3
console.log(findMaximumConsecutiveOnes([1,0,1,1,0,1])); // Output: 2
console.log(findMaximumConsecutiveOnes([0])); // Output: 0
console.log(findMaximumConsecutiveOnes([1])); // Output: 1
console.log(findMaximumConsecutiveOnes([1,1,1,1])); // Output: 4