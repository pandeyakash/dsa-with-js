/**
 * Problem: Reverse String
 * LeetCode: #344
 * Link: https://leetcode.com/problems/reverse-string/
 * Difficulty: Easy
 * Topic: Arrays (Two Pointers)
 *
 * 
 *
 * Time Complexity: O(n)
 *   Each element is visited once (n / 2 swaps).
 * Space Complexity: O(1)
 *   The array is reversed in-place using only two pointers.
 */

function reverseString(s) {
  for(let i =0; i< Math.floor(s.length / 2); i++) {
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }

  return s
}

// -------Test Cases-------
console.log(reverseString(["h","e","l","l","o"])); // Output: ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])); // Output: ["h","a","n","n","a","H"]
console.log(reverseString(["A"])); // Output: ["A"]
console.log(reverseString([])); // Output: []
console.log(reverseString(["a","b","c","d","e","f"])); // Output: ["f","e","d","c","b","a"]