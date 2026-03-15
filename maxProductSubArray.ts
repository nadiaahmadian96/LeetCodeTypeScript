// Problem: LeetCode 152 - Maximum Product Subarray
// Given an integer array, find the contiguous subarray with the largest product and return it.
// Example: [-2,3,-4] → 24 (the whole array: -2 * 3 * -4 = 24)
//
// Solution: Track both the current max and min products at each step.
// A negative number can flip the min into the new max, so we must keep both.
// Swap curMax and curMin before computing when a negative is encountered (via temp).
// Time: O(n) | Space: O(1)
function maxProductSubArray(nums : number[]) : number {
    let curMin = nums[0];
    let curMax = nums[0];
    let result = nums[0];

    for ( let i = 1 ; i <nums.length ; i ++){
        const temp = curMax; 
        curMax = Math.max(nums[i] , curMax * nums[i], curMin * nums[i]); 
        curMin = Math.min(nums[i] , temp * nums[i], curMin * nums[i]); 
        result = Math.max(result, curMax);
    }
    return result;
}

console.log(maxProductSubArray([-2, 3, -4]));