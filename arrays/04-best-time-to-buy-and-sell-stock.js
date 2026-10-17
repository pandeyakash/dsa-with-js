/**
 * Problem: Best Time to Buy and Sell Stock
 * LeetCode: #121
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Difficulty: Easy
 * Topic: Arrays (Single Pass / Greedy)
 *
 *
 *
 * Time Complexity: O(n)
 *   The array is traversed once.
 * Space Complexity: O(1)
 *   Only two extra variables are used.
 */

// Brute Force Solution
// function maxProfit(prices) {
//     let maxProfit = 0;

//     for(let i = 0; i < prices.length; i++) {
//         for(let j = i + 1; j < prices.length; j++) {
//             let profit = prices[j] - prices[i]
//             if(profit > maxProfit) {
//                 maxProfit = profit
//             }
//         }
//     }

//     return maxProfit
// }

//Optimized Solution
function maxProfit(prices) {
    let maxProfit = 0;
    let min = prices[0];

    for(let i = 1; i < prices.length; i++) {
        let profit = prices[i] - min
        if(profit > maxProfit) {
            maxProfit = profit
        }
        if(prices[i] < min) {
            min = prices[i]
        }
    }

    return maxProfit
}

// -------Test Cases-------
console.log(maxProfit([7,1,5,3,6,4])); // Output: 5
console.log(maxProfit([7,6,4,3,1])); // Output: 0
console.log(maxProfit([1,2])); // Output: 1
console.log(maxProfit([2,4,1])); // Output: 2
console.log(maxProfit([3,2,6,5,0,3])); // Output: 4