// Problem: LeetCode 121 - Best Time to Buy and Sell Stock
// Given an array of prices where prices[i] is the price on day i,
// find the maximum profit from a single buy-then-sell transaction.
// Example: [7,1,5,3,6,4] → 5 (buy at 1, sell at 6)
//
// Solution: Single pass tracking the minimum price seen so far.
// At each price, the best profit is current price minus the running minimum.
// Time: O(n) | Space: O(1)
function maxProfit(prices : number[]) : number {
    let minPrice = Infinity; 
    let maxProfit = 0;

    for(const price of prices){
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit,price - minPrice);
    }
    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));