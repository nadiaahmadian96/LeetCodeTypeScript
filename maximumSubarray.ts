// Problem: LeetCode 53 - Maximum Subarray
// Given an integer array, find the contiguous subarray with the largest sum and return its sum.
// Example: [-2,1,-3,4,-1,2,1,-5,4] → 6 (subarray [4,-1,2,1])
//
// Solution: Kadane's algorithm.
// Extend the current subarray or start fresh at each element, whichever gives a larger value.
// Time: O(n) | Space: O(1)
function maxSubArray(nums : number[]): number{
    let currentSum = nums[0];
    let maxSum = nums[0];

    for(let i = 1; i < nums.length; i ++){
        currentSum = Math.max(nums[i] , currentSum + nums[i])
        maxSum = Math.max(maxSum , currentSum)
    }
    return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));