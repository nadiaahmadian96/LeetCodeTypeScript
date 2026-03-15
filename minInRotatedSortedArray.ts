// Problem: LeetCode 153 - Find Minimum in Rotated Sorted Array
// A sorted array was rotated at some pivot. Find the minimum element.
// Example: [3,4,5,1,2] → 1
//
// Solution: Binary search.
// If nums[mid] > nums[right], the minimum must be in the right half (left = mid + 1).
// Otherwise the minimum is in the left half including mid (right = mid).
// Time: O(log n) | Space: O(1)
function findMin(nums: number[]) : number {
    let left = 0 
    let right = nums.length - 1

    while (left< right){
        const mid = Math.floor((left + right)/ 2)

        if (nums[mid]> nums[right]){
            left = mid + 1
        }else{
            right = mid
        } 
    }
     return nums[left]
}

console.log(findMin([3, 4, 5, 1, 2]));