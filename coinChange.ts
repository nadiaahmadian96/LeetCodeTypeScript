// Problem 322 – Coin Change
// https://leetcode.com/problems/coin-change/
//
// Given an array of coin denominations and a target amount, return the
// fewest number of coins needed to make up that amount. If it is not
// possible, return -1.
//
// Example:
//   coins = [1, 2, 5], amount = 11  →  3  (5 + 5 + 1)
//   coins = [2],        amount = 3   → -1
//
// Approach: Bottom-up DP (unbounded knapsack style)
//   Build a table minCoins[0..amount] where minCoins[i] = the minimum
//   coins needed to reach amount i.
//   - Initialize every entry to (amount + 1) as a sentinel "infinity".
//   - For each sub-amount i, try every coin: if the coin fits (coin <= i),
//     check whether using it improves the answer: minCoins[i - coin] + 1.
//   - If minCoins[amount] is still the sentinel value, return -1.
//
// Time:  O(amount * coins.length)
// Space: O(amount)

function coinChange( coins : number[], amount : number) : number{
const minCoins = new Array(amount + 1 ).fill(amount + 1)

minCoins[0] = 0  //base case : 0 coins needed to make amount 0

for(let i = 1; i <= amount; i ++){
    for(const coin of coins){
        if(coin<=i){
            minCoins[i] = Math.min(minCoins[i], 1 + minCoins[i - coin])
        }
    }
}
return minCoins[amount] > amount ? -1 : minCoins[amount]
}

console.log(coinChange([1, 3, 7, 4, 2], 5))