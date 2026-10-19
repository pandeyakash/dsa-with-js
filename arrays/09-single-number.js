/**
 * Problem: Single Number
 * LeetCode: #136
 * Link: https://leetcode.com/problems/single-number/
 * Difficulty: Easy
 * Topic: Arrays (Hashing / Bit Manipulation)
 *
 * Description:
 * Given a non-empty array of integers nums, every element appears
 * twice except for one. Find that single one.
 * The solution should run in linear time and use only constant
 * extra space.
 *
 * Example:
 * Input: nums = [2, 2, 1]
 * Output: 1
 *
 * Input: nums = [4, 1, 2, 1, 2]
 * Output: 4
 *
 * Input: nums = [1]
 * Output: 1
 */

// ============================================================
// Approach 1: Hash Map (Frequency Count)
// ============================================================
/**
 * Approach:
 * Use an object as a hash map to count how many times each
 * number appears.
 * First loop: if the number is not in the map, set its count to 1;
 * otherwise, increase its count by 1.
 * Second loop: go through the array again and return the first
 * number whose count is 1.
 *
 * Time Complexity: O(n)
 *   Two separate passes over the array.
 * Space Complexity: O(n)
 *   The hash map stores up to n / 2 + 1 unique numbers.
 */
function singleNumberHash(nums) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === 1) {
      return nums[i];
    }
  }
}

// ============================================================
// Approach 2: XOR (Optimal)
// ============================================================
/**
 * Approach:
 * XOR has three useful properties:
 *   a ^ a = 0      (a number XORed with itself cancels out)
 *   a ^ 0 = a      (XOR with 0 leaves the number unchanged)
 *   XOR is commutative and associative (order doesn't matter)
 * Start with result = 0 and XOR every element into it.
 * Every number that appears twice cancels itself out,
 * so only the single number is left in result.
 *
 * Dry run for [4, 1, 2, 1, 2]:
 *   0 ^ 4 = 4
 *   4 ^ 1 = 5
 *   5 ^ 2 = 7
 *   7 ^ 1 = 6
 *   6 ^ 2 = 4  → answer
 *
 * Time Complexity: O(n)
 *   The array is traversed once.
 * Space Complexity: O(1)
 *   Only one extra variable is used.
 */
function singleNumberXOR(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
}

// ---------- Test Cases ----------
const testCases = [
  { nums: [2, 2, 1], expected: 1 },
  { nums: [4, 1, 2, 1, 2], expected: 4 },
  { nums: [1], expected: 1 },                 // single element
  { nums: [-1, -1, -2], expected: -2 },       // negative numbers
  { nums: [0, 5, 5], expected: 0 },           // answer is 0
  { nums: [7, 3, 3], expected: 7 },           // answer at the start
];

testCases.forEach(({ nums, expected }) => {
  console.log(
    `nums = [${nums}] | Hash: ${singleNumberHash(nums)} | XOR: ${singleNumberXOR(nums)} | Expected: ${expected}`
  );
});

/**
 * Notes:
 * - The hash map approach is easy to think of and works for
 *   variations (e.g. every element appears three times), but it
 *   uses O(n) extra space, so it doesn't meet the problem's
 *   constant-space requirement.
 * - XOR is the expected interview answer: O(n) time, O(1) space.
 * - Same XOR trick appears in #268 Missing Number.
 */