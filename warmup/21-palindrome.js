/**  
Problem Statement:
Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.

Requirements:
Handles both positive and negative integers.
Return falsefor negative numbers (not Palindromes).
Constraints:
Time Complexity: O(d)Where dis the number of digits.

Space Complexity: O(1)Only a few variables are used.

Examples:
Input:121

Output:true

Input:-121

Output:false

Input:10

Output:false

*/

function isPalindrome(n) {
  if(n < 0) return false; // Negative numbers are not palindromes
  let original = n;
  let reversed = 0;

  while(n > 0) {
    let rem = n % 10;
    reversed = reversed * 10 + rem;
    n = Math.floor(n / 10);
  }

  return original === reversed;
}

// ---------- Test Cases ----------
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
console.log(isPalindrome(12321)); // Output: true 