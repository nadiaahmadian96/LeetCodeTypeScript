// Problem: LeetCode 283 - Move Zeroes
// Given an integer array nums, move all 0s to the end while maintaining
// the relative order of the non-zero elements. Modify in-place.
// Example: [0, 1, 0, 3, 12] → [1, 3, 12, 0, 0]
//
// Solution: Two-pointer approach. The left pointer tracks the next position
// for a non-zero element. Swap nums[right] with nums[left] whenever a non-zero
// is found, then advance left.
// Time: O(n) | Space: O(1)
function moveZeroes(nums : number[]) : void {
    let left = 0 

    for (let right = 0 ; right < nums.length; right ++){
        if(nums[right]!== 0){
            [nums[left], nums[right]]= [nums[right],nums[left]]
            left ++
        }
    }
}

const nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums)