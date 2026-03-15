// Problem: LeetCode 268 - Missing Number
// Given an array nums containing n distinct numbers in the range [0, n],
// return the one number in the range that is missing.
// Example: nums = [3, 0, 1] → 2
//
// Solution: Gauss's formula gives the expected sum of [0..n]. Subtract the
// actual array sum to find the missing value.
// Time: O(n) | Space: O(1)
function missingNumber(nums : number[]) : number {
    const n = nums.length
    const expectedSum = (n * (n+1))/ 2
    const actualSum = nums.reduce((a,b) => a+b , 0)
    return expectedSum - actualSum
}

console.log(missingNumber([3, 0, 1])) 
console.log(missingNumber([0, 1]))    