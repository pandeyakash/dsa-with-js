/**
 * Problem: Merge Sorted Array
 * LeetCode: #88
 * Link: https://leetcode.com/problems/merge-sorted-array/
 * Difficulty: Easy
 * Topic: Arrays (Two Pointers)
 *
 * 
 *
 * Time Complexity: O(m + n)
 *   Each element is placed exactly once.
 * Space Complexity: O(1)
 *   The merge happens in-place inside nums1.
 */


//Approach 1: Creating a copy of nums1 and merging nums1Copy and nums2 into nums1 (this has time complexity of O(m + n) and space complexity of O(m) because we are creating a copy of nums1)
// function merge(nums1, m, nums2, n) {
//     let nums1Copy = [...nums1];
//     let p1 = 0;
//     let p2 = 0;

//     for(let i = 0; i < m+n; i++) {
//         if((nums1Copy[p1] <= nums2[p2] && p1 < m) || p2 >= n) {
//             nums1[i] = nums1Copy[p1]
//             p1++
//         } else {
//             nums1[i] = nums2[p2]
//             p2++
//         }
//     }

//     return nums1
// }

//Approach 2: merging nums1 and nums2 in-place (this has time complexity of O(m + n) and space complexity of O(1) because we are not creating any extra space)
function merge(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;

    for(let i = (m+n) - 1; i >= 0; i-- ) {
        if(p2 < 0) break;

        if(nums1[p1] >= nums2[p2] && p1 >= 0) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }

    return nums1
}

//---------------Test Cases-------
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)); // Output: [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // Output: [1]
console.log(merge([0], 0, [1], 1)); // Output: [1]
console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3)); // Output: [1,2,3,4,5,6]