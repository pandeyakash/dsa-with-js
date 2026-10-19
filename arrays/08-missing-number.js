/**
 * Problem: Missing Number
 * LeetCode: #268
 * Link: https://leetcode.com/problems/missing-number/
 * Difficulty: Easy
 * Topic: Arrays (Math)
 *
 * 
 *
 * Time Complexity: O(n)
 *   The array is traversed once to compute the sum.
 * Space Complexity: O(1)
 *   Only a few variables are used.
 */

function missingNumber(nums) {
    let n = nums.length
    let rangeSum = (n * (n + 1)) / 2
    let numsSum = 0;

    for(let i = 0; i < n; i++) {
        numsSum += nums[i]
    }

    return rangeSum - numsSum
}

// -------Test Cases-------
console.log(missingNumber([3,0,1])); // Output: 2
console.log(missingNumber([0,1])); // Output: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Output: 8
console.log(missingNumber([0])); // Output: 1
console.log(missingNumber([1])); // Output: 0
console.log(missingNumber([0,2])); // Output: 1