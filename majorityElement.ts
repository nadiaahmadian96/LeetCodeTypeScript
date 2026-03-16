// Problem: LeetCode 169 - Majority Element
// Given an array of size n, return the element that appears more than n/2 times.
// Example: nums = [3, 2, 3] → 3
//
// Solution: Boyer-Moore Voting — track a candidate and a count. When count hits 0
// switch to the current element. The majority element always survives the cancellation.
// Time: O(n) | Space: O(1)
function majorityElement(nums: number[]): number {
    let candidate = nums[0]
    let count = 1

    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i]
            count = 1

        } else if (nums[i] === candidate) {
            count++
        } else {
            count--
        }
    }
    return candidate
}

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))