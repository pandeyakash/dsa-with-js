/**
 * Problem: Eligible to Vote
 * Topic: If-Else
 *
 * Description:
 * Given a person's age, check whether they are eligible to vote.
 * A person is eligible if their age is 18 or above.
 *
 * Example:
 * Input: 20  → Output: "Eligible to vote"
 * Input: 15  → Output: "Not eligible to vote"
 *
 * Approach:
 * Compare the age with 18 using an if-else condition.
 *
 */

function isEligibleToVote(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

// ---------- Test Cases ----------
console.log(isEligibleToVote(20)); // Eligible to vote
console.log(isEligibleToVote(15)); // Not eligible to vote
console.log(isEligibleToVote(18)); // Eligible to vote (edge case)